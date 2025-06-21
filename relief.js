document.getElementById("generateBtn").addEventListener("click", generateReliefTable);

function generateReliefTable() {
  const container = document.querySelector(".reliefTimetable");
  container.innerHTML = ""; // Clear previous table

  const table = document.createElement("table");
  table.classList.add("relief-table");

  // Create table header
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Absent Teacher</th>
      <th>Classroom</th>
      <th>Subject</th>
      <th>Time</th>
      <th>Relief Teacher</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  const baseHour = 7;
  const baseMinute = 30;

  timetable.forEach((entry, tIndex) => {
    const teacherName = entry.teacher;
    const sessions = entry.sessions;

    const fullDayChecked = document.querySelector(`input[name="absent-${tIndex}-fullday"]`)?.checked;

    sessions.forEach((session, sIndex) => {
      const sessionCheckbox = document.querySelector(`input[name="absent-${tIndex}-session-${sIndex}"]`);
      const isSessionChecked = sessionCheckbox?.checked;
      const includeSession = fullDayChecked || isSessionChecked;

      // Only include if checkbox is selected AND classroom exists
      if (includeSession && session.classroom) {
        // Calculate time
        let sessionStartMinutes = baseHour * 60 + baseMinute;
        for (let i = 0; i < sIndex; i++) {
          sessionStartMinutes += sessions[i].duration;
        }

        const startHour = Math.floor(sessionStartMinutes / 60);
        const startMinute = sessionStartMinutes % 60;
        const startTime = `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${teacherName}</td>
          <td>${session.classroom}</td>
          <td>${session.subject}</td>
          <td>${startTime}</td>
          <td>
            <select>
              <option value="">-- Select Teacher --</option>
            </select>
          </td>
        `;

        tbody.appendChild(row);
      }
    });
  });

  table.appendChild(tbody);
  container.appendChild(table);
}
