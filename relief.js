function generateReliefTable() {
  const reliefContainer = document.querySelector(".reliefTimetable");
  reliefContainer.innerHTML = "";

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

  const absentTeachers = timetable.filter((entry, index) => {
    const isFullDay = document.querySelector(`input[name="absent-${index}-fullday"]`)?.checked;
    const sessionCheckboxes = Array.from(document.querySelectorAll(`input[name^="absent-${index}-session-"]`));
    return isFullDay || sessionCheckboxes.some(cb => cb.checked);
  }).map(entry => entry.teacher);

  const sessionGroups = {};

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

      const key = `${teacherName}-${session.classroom}-${session.subject}`;
      if (!sessionGroups[key]) sessionGroups[key] = [];
      sessionGroups[key].push({ start, end, tIndex, sIndex, label: timeLabel });

      currentMinute += session.duration;
      if (currentMinute >= 60) {
        currentHour += Math.floor(currentMinute / 60);
        currentMinute %= 60;
      }
    });
  });

  const assignedTeachers = {};

  Object.values(sessionGroups).forEach(group => {
    const first = group[0];
    const teacherName = timetable[first.tIndex].teacher;
    const session = timetable[first.tIndex].sessions[first.sIndex];

    const candidates = timetable
    .filter(c =>
      c.teacher !== teacherName &&
      !absentTeachers.includes(c.teacher) &&
      !Object.entries(assignedTeachers).some(([assigned, times]) =>
        assigned === c.teacher &&
        times.some(time =>
          group.some(g => g.start < time.end && time.start < g.end)
        )
      )
    )
    .map(c => ({
      name: c.teacher,
      hasConflict: scheduleMap[c.teacher].some(cs =>
        group.some(g => g.start < cs.end && cs.start < g.end)
      )
    }));

    const available = candidates.filter(c => !c.hasConflict);
    const assigned = available.length
    ? available[Math.floor(Math.random() * available.length)].name
    : "No relief available";
    
    if (!assignedTeachers[assigned]) assignedTeachers[assigned] = [];
    if (assigned !== "No relief available") {
      group.forEach(g => assignedTeachers[assigned].push({ start: g.start, end: g.end }));
    }

    group.forEach(({ tIndex, sIndex, start, end, label }) => {
      const row = document.createElement("tr");
      const session = timetable[tIndex].sessions[sIndex];

      row.innerHTML = `
        <td>${timetable[tIndex].teacher}</td>
        <td>${session.classroom}</td>
        <td>${session.subject}</td>
        <td>${label}</td>
      `;

      const reliefTd = document.createElement("td");
      const select = document.createElement("select");
      select.style.width = "100%";
      select.dataset.teacher = timetable[tIndex].teacher;
      select.dataset.start = start.getTime();
      select.dataset.end = end.getTime();

      const defaultOption = new Option("-- Select Teacher --", "");
      select.appendChild(defaultOption);

      const optAvailable = document.createElement("optgroup");
      optAvailable.label = "Available Teacher";

      const optUnavailable = document.createElement("optgroup");
      optUnavailable.label = "Unavailable Teacher";

      const optSpecial = document.createElement("optgroup");
      optSpecial.label = "Special Cases";

      candidates.forEach(({ name, hasConflict }) => {
        const label = hasConflict ? `❌ ${name}` : name;
        const option = new Option(label, name);
        if (hasConflict) optUnavailable.appendChild(option);
        else optAvailable.appendChild(option);
      });

      const specialCases = ["No relief available", "Program", "Pengawas", "Murid di kelas"];
      specialCases.forEach(label => {
        const option = new Option(`⚠️ ${label}`, label);
        optSpecial.appendChild(option);
      });

      select.appendChild(optAvailable);
      select.appendChild(optUnavailable);
      select.appendChild(optSpecial);
      select.value = assigned;
      // ✅ Trigger change event immediately to apply double-booking rule
      select.dispatchEvent(new Event("change"));
      reliefTd.appendChild(select);
      row.appendChild(reliefTd);
      tbody.appendChild(row);

      select.addEventListener("change", applyReliefConflictRules);     
    });
  });

  reliefContainer.appendChild(table);
  applyReliefConflictRules(); // 👈 immediately applies conflict disabling after table render
}

// Format time in HH:MM format
function formatTime(hour, minute) {
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

function applyReliefConflictRules() {
  // Step 1: Enable all options first
  document.querySelectorAll(".reliefTimetable select").forEach(sel => {
    Array.from(sel.options).forEach(opt => opt.disabled = false);
  });

  // Step 2: Gather all selected values with their time ranges
  const selectedAssignments = Array.from(document.querySelectorAll(".reliefTimetable select"))
    .filter(sel => sel.value && !["No relief available", "Program", "Pengawas", "Murid di kelas"].includes(sel.value))
    .map(sel => ({
      value: sel.value,
      start: parseInt(sel.dataset.start),
      end: parseInt(sel.dataset.end)
    }));

  // Step 3: Disable options that would cause time conflicts
  document.querySelectorAll(".reliefTimetable select").forEach(sel => {
    const selStart = parseInt(sel.dataset.start);
    const selEnd = parseInt(sel.dataset.end);

    Array.from(sel.options).forEach(option => {
      if (!option.value || ["No relief available", "Program", "Pengawas", "Murid di kelas"].includes(option.value)) return;

      const isConflict = selectedAssignments.some(assign =>
        assign.value === option.value &&
        selStart < assign.end && assign.start < selEnd &&
        !(parseInt(sel.dataset.start) === assign.start && parseInt(sel.dataset.end) === assign.end && sel.value === assign.value)
      );

      option.disabled = isConflict;
    });
  });
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
