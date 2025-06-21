function generateReliefTable() {
  const reliefContainer = document.querySelector(".reliefTimetable");
  reliefContainer.innerHTML = ""; // clear previous content

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Absent Teacher</th>
        <th>Classroom</th>
        <th>Subject</th>
        <th>Time</th>
        <th>Relief Teacher</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  const baseHour = 7;
  const baseMinute = 30;

  const scheduleMap = getTeacherSchedule(timetable);

  timetable.forEach((entry, tIndex) => {
    const teacherName = entry.teacher;
    const isFullDay = document.querySelector(`input[name="absent-${tIndex}-fullday"]`)?.checked;
    const sessionCheckboxes = Array.from(document.querySelectorAll(`input[name^="absent-${tIndex}-session-"]`));

    let currentHour = baseHour;
    let currentMinute = baseMinute;

    entry.sessions.forEach((session, sIndex) => {
      const sessionCheckbox = sessionCheckboxes[sIndex];
      const isChecked = sessionCheckbox?.checked;

      // Skip if not full day and this session is not marked
      if (!isFullDay && !isChecked) {
        currentMinute += session.duration;
        if (currentMinute >= 60) {
          currentHour += Math.floor(currentMinute / 60);
          currentMinute %= 60;
        }
        return;
      }

      // Skip if no class assigned
      if (!session.subject || !session.classroom) {
        currentMinute += session.duration;
        if (currentMinute >= 60) {
          currentHour += Math.floor(currentMinute / 60);
          currentMinute %= 60;
        }
        return;
      }

      // Compute start and end times
      const start = new Date(0, 0, 0, currentHour, currentMinute);
      const end = new Date(start.getTime() + session.duration * 60000);
      const timeLabel = `${formatTime(currentHour, currentMinute)} - ${formatTime(end.getHours(), end.getMinutes())}`;

      // Create row
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${teacherName}</td>
        <td>${session.classroom}</td>
        <td>${session.subject}</td>
        <td>${timeLabel}</td>
      `;

      // Relief teacher dropdown
      const reliefTd = document.createElement("td");
      const select = document.createElement("select");

      select.dataset.absentTeacher = teacherName;
      select.dataset.sessionIndex = sIndex;

      // Default option
      const defaultOption = new Option("-- Select Teacher --", "");
      select.appendChild(defaultOption);

      // Optgroups
      const optAvailable = createOptGroup("Available Teacher", []);
      const optUnavailable = createOptGroup("Unavailable Teacher", []);
      const optSpecial = createOptGroup("Special Cases", ["No relief available", "Program", "Pengawas", "Murid di kelas"]);

      // Check availability
      const currentSession = { start, end };

      timetable.forEach(candidateEntry => {
        const candidateName = candidateEntry.teacher;
        if (candidateName === teacherName) return; // Skip self

        const schedule = scheduleMap[candidateName];
        const conflict = schedule.some(s =>
          currentSession.start < s.end && s.start < currentSession.end
        );

        const option = new Option(candidateName, candidateName);
        if (conflict) {
          optUnavailable.appendChild(option);
        } else {
          optAvailable.appendChild(option);
        }
      });

      // Append optgroups
      select.appendChild(optAvailable);
      select.appendChild(optUnavailable);
      select.appendChild(optSpecial);

      // Add event listener to track changes
      select.addEventListener("change", (e) => {
        console.log(`Relief selected for ${teacherName} [${session.subject} at ${session.classroom} ${timeLabel}]:`, e.target.value);
      });

      reliefTd.appendChild(select);
      row.appendChild(reliefTd);
      tbody.appendChild(row);

      // Advance time
      currentMinute += session.duration;
      if (currentMinute >= 60) {
        currentHour += Math.floor(currentMinute / 60);
        currentMinute %= 60;
      }
    });
  });

  reliefContainer.appendChild(table);
}

// Format time in HH:MM format
function formatTime(hour, minute) {
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

// Generate teacher's complete schedule with start/end times
function getTeacherSchedule(timetable) {
  const baseHour = 7;
  const baseMinute = 30;
  const schedule = {};

  timetable.forEach(entry => {
    let currentHour = baseHour;
    let currentMinute = baseMinute;
    const sessions = [];

    entry.sessions.forEach(session => {
      const start = new Date(0, 0, 0, currentHour, currentMinute);
      const end = new Date(start.getTime() + session.duration * 60000);

      // ✅ Only add session if the teacher has a class
      if (session.subject && session.classroom) {
        sessions.push({ start, end });
      }

      currentMinute += session.duration;
      if (currentMinute >= 60) {
        currentHour += Math.floor(currentMinute / 60);
        currentMinute %= 60;
      }
    });

    schedule[entry.teacher] = sessions;
  });

  return schedule;
}

// Create an optgroup with options
function createOptGroup(label, items) {
  const group = document.createElement("optgroup");
  group.label = label;
  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    group.appendChild(option);
  });
  return group;
}

// Event listener
document.getElementById("generateBtn").addEventListener("click", generateReliefTable);
