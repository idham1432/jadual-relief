function generateReliefTable() {
  const reliefContainer = document.querySelector(".reliefTimetable");
  reliefContainer.innerHTML = ""; // clear previous content

  const table = document.createElement("table");
  table.classList.add("relief-table");
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

  // Determine all absent teachers
  const absentTeachers = timetable.filter((entry, index) => {
    const isFullDay = document.querySelector(`input[name="absent-${index}-fullday"]`)?.checked;
    const sessionCheckboxes = Array.from(document.querySelectorAll(`input[name^="absent-${index}-session-"]`));
    return isFullDay || sessionCheckboxes.some(cb => cb.checked);
  }).map(entry => entry.teacher);

  timetable.forEach((entry, tIndex) => {
    const teacherName = entry.teacher;
    const isFullDay = document.querySelector(`input[name="absent-${tIndex}-fullday"]`)?.checked;
    const sessionCheckboxes = Array.from(document.querySelectorAll(`input[name^="absent-${tIndex}-session-"]`));

    let currentHour = baseHour;
    let currentMinute = baseMinute;

    entry.sessions.forEach((session, sIndex) => {
      const sessionCheckbox = sessionCheckboxes[sIndex];
      const isChecked = sessionCheckbox?.checked;

      if (!isFullDay && !isChecked) {
        currentMinute += session.duration;
        if (currentMinute >= 60) {
          currentHour += Math.floor(currentMinute / 60);
          currentMinute %= 60;
        }
        return;
      }

      if (!session.subject || !session.classroom) {
        currentMinute += session.duration;
        if (currentMinute >= 60) {
          currentHour += Math.floor(currentMinute / 60);
          currentMinute %= 60;
        }
        return;
      }

      const start = new Date(0, 0, 0, currentHour, currentMinute);
      const end = new Date(start.getTime() + session.duration * 60000);
      const timeLabel = `${formatTime(currentHour, currentMinute)} - ${formatTime(end.getHours(), end.getMinutes())}`;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${teacherName}</td>
        <td>${session.classroom}</td>
        <td>${session.subject}</td>
        <td>${timeLabel}</td>
      `;

      const reliefTd = document.createElement("td");
      const select = document.createElement("select");
      select.style.width = "100%";
      select.dataset.teacher = teacherName;
      select.dataset.start = start.getTime();
      select.dataset.end = end.getTime();
      select.dataset.index = `${tIndex}-${sIndex}`;

      const defaultOption = new Option("-- Select Teacher --", "");
      select.appendChild(defaultOption);

      const optAvailable = document.createElement("optgroup");
      optAvailable.label = "Available Teacher";

      const optUnavailable = document.createElement("optgroup");
      optUnavailable.label = "Unavailable Teacher";

      const optSpecial = document.createElement("optgroup");
      optSpecial.label = "Special Cases";

      // Count sessions per teacher
      const teacherSessionCount = {};
      timetable.forEach(entry => {
        const count = entry.sessions.filter(s => s.subject && s.classroom).length;
        teacherSessionCount[entry.teacher] = count;
      });

      // Prepare sorted candidate list
      const candidates = timetable
        .filter(candidate => candidate.teacher !== teacherName && !absentTeachers.includes(candidate.teacher))
        .map(candidate => ({
          name: candidate.teacher,
          count: teacherSessionCount[candidate.teacher] || 0,
          hasConflict: scheduleMap[candidate.teacher].some(cs => start < cs.end && cs.start < end)
        }))
        .sort((a, b) => a.count - b.count);

      candidates.forEach(({ name, count, hasConflict }) => {
        const label = hasConflict ? `❌ ${name} (${count})` : `${name} (${count})`;
        const option = new Option(label, name);
        (hasConflict ? optUnavailable : optAvailable).appendChild(option);
      });      

      const specialCases = ["No relief available", "Program", "Pengawas", "Murid di kelas"];
      specialCases.forEach(label => {
        const option = new Option(`⚠️ ${label}`, label);
        optSpecial.appendChild(option);
      });

      select.appendChild(optAvailable);
      select.appendChild(optUnavailable);
      select.appendChild(optSpecial);
      reliefTd.appendChild(select);
      row.appendChild(reliefTd);
      tbody.appendChild(row);

      // Attach event listener to prevent double booking
      select.addEventListener("change", (e) => {
        const selectedStart = parseInt(e.target.dataset.start);
        const selectedEnd = parseInt(e.target.dataset.end);
      
        // Step 1: Collect all currently selected values for the same time
        const selectedValuesAtTime = new Set();
        document.querySelectorAll(".reliefTimetable select").forEach(sel => {
          const selStart = parseInt(sel.dataset.start);
          const selEnd = parseInt(sel.dataset.end);
          if (selStart === selectedStart && selEnd === selectedEnd) {
            const val = sel.value;
            if (val && val !== "" && !["No relief available", "Program", "Pengawas", "Murid di kelas"].includes(val)) {
              selectedValuesAtTime.add(val);
            }
          }
        });
      
        // Step 2: Update all selects for that time to disable selected values
        document.querySelectorAll(".reliefTimetable select").forEach(sel => {
          const selStart = parseInt(sel.dataset.start);
          const selEnd = parseInt(sel.dataset.end);
          if (selStart === selectedStart && selEnd === selectedEnd) {
            Array.from(sel.children).forEach(optGroup => {
              if (optGroup.label === "Special Cases") return;
              Array.from(optGroup.children).forEach(option => {
                option.disabled = selectedValuesAtTime.has(option.value);
              });
            });
          }
        });
      });      

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
