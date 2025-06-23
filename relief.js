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
  const totalSessions = getTotalSessionsPerTeacher(timetable);

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
      ),
      sessionCount: totalSessions[c.teacher] || 0
    }))
    .sort((a, b) => a.sessionCount - b.sessionCount); // ✅ sort ascending

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
        const sessionCount = totalSessions[name] || 0;
        const label = hasConflict ? `❌ ${name} (${sessionCount})` : `${name} (${sessionCount})`;
        const option = new Option(label, name);
        if (hasConflict) optUnavailable.appendChild(option);
        else optAvailable.appendChild(option);
      });

      const specialCases = ["No relief available", "Program", "Pengawas", "Murid di kelas", "Murid di dewan", "Murid di dataran"];
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

      select.addEventListener("change", () => {
        applyReliefConflictRules();
        saveReliefState(); // ✅ Save new selection immediately
      });         
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

function getTotalSessionsPerTeacher(timetable) {
  const totals = {};
  timetable.forEach(entry => {
    const count = entry.sessions.filter(s => s.subject && s.classroom).length;
    totals[entry.teacher] = count;
  });
  return totals;
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

function clearReliefSelections() {
  const selects = document.querySelectorAll(".reliefTimetable select");
  selects.forEach(select => {
    select.value = ""; // reset to default
    select.dispatchEvent(new Event("change")); // re-apply conflict rules
  });
}

function saveReliefState() {
  const tableHTML = document.querySelector(".reliefTimetable").innerHTML;
  const selections = Array.from(document.querySelectorAll(".reliefTimetable select")).map(select => ({
    value: select.value,
    start: select.dataset.start,
    end: select.dataset.end,
    teacher: select.dataset.teacher
  }));
  localStorage.setItem("reliefTable", tableHTML);
  localStorage.setItem("reliefSelections", JSON.stringify(selections));
}

document.getElementById("generateBtn").addEventListener("click", () => {
  generateReliefTable();
  saveReliefState();
});

document.getElementById("clearBtn").addEventListener("click", () => {
  clearReliefSelections();
  saveReliefState(); // Save cleared state
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTable = localStorage.getItem("reliefTable");
  const savedSelections = JSON.parse(localStorage.getItem("reliefSelections") || "[]");

  if (savedTable) {
    document.querySelector(".reliefTimetable").innerHTML = savedTable;

    // Rebind change event and restore selections
    const selects = document.querySelectorAll(".reliefTimetable select");

    selects.forEach(select => {
      const match = savedSelections.find(s =>
        s.start === select.dataset.start &&
        s.end === select.dataset.end &&
        s.teacher === select.dataset.teacher
      );
      if (match) {
        select.value = match.value;
      }
      select.addEventListener("change", () => {
        applyReliefConflictRules();
        saveReliefState(); // ✅ Save changes made after reload
      });      
    });

    applyReliefConflictRules(); // Re-apply conflict disabling
  }
});

const dateInput = document.querySelector('#absentDate');  // your date input inside .inputGroup
const dayInput = document.querySelector('#absentDay');    // your day input inside .inputGroup

function updateSavedDateDayDisplay() {
  const storedDate = localStorage.getItem("selectedDate");
  const storedDay = localStorage.getItem("selectedDay");

  if (storedDate) {
    const [year, month, day] = storedDate.split("-");
    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById("savedDateDisplay").textContent = `Date: ${formattedDate}`;
  }

  if (storedDay) {
    document.getElementById("savedDayDisplay").textContent = `Day: ${storedDay}`;
  }
}

function saveDateDayToLocalStorage() {
  const selectedDate = dateInput.value;

  // Wait for a short moment to ensure day is auto-updated
  setTimeout(() => {
    const selectedDay = dayInput.value;

    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("selectedDay", selectedDay);
    updateSavedDateDayDisplay();
  }, 50); // short delay to allow day input to update
}

// Event listeners for when user changes date/day input
dateInput.addEventListener("input", saveDateDayToLocalStorage);
dayInput.addEventListener("input", saveDateDayToLocalStorage);

// Load on DOM ready
window.addEventListener("DOMContentLoaded", () => {
  const savedDate = localStorage.getItem("selectedDate");
  const savedDay = localStorage.getItem("selectedDay");

  if (savedDate) dateInput.value = savedDate;
  if (savedDay) dayInput.value = savedDay;

  updateSavedDateDayDisplay();
});

// PDF download
document.getElementById("pdfBtn").addEventListener("click", async () => {
  const container = document.querySelector(".reliefTimetableContainer");
  const canvas = await html2canvas(container, { scale: 1.5 }); // Higher quality

  const imgData = canvas.toDataURL("image/png");
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pageWidth;
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  const canvasHeight = canvas.height;
  const canvasWidth = canvas.width;
  const pageCanvasHeight = (pageHeight * canvasWidth) / pageWidth;

  let position = 0;

  while (position < canvasHeight) {
    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = canvasWidth;
    pageCanvas.height = pageCanvasHeight;

    const pageCtx = pageCanvas.getContext("2d");
    pageCtx.drawImage(
      canvas,
      0,
      position,
      canvasWidth,
      pageCanvasHeight,
      0,
      0,
      canvasWidth,
      pageCanvasHeight
    );

    const pageImgData = pageCanvas.toDataURL("image/png");
    if (position > 0) pdf.addPage();
    pdf.addImage(
      pageImgData,
      "PNG",
      0,
      0,
      pdfWidth,
      (pageCanvasHeight * pdfWidth) / canvasWidth
    );

    position += pageCanvasHeight;
  }

  pdf.save("relief-timetable.pdf");
});

// PNG download
document.getElementById("pngBtn").addEventListener("click", async () => {
  const container = document.querySelector(".reliefTimetableContainer");
  const canvas = await html2canvas(container, { scale: 2 });

  const imgData = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = imgData;
  link.download = "relief-timetable.png";
  link.click();
});