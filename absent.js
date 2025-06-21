window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("checkboxContainer");

  const baseHour = 7;
  const baseMinute = 30;

  timetable.forEach((entry, tIndex) => {
    const teacherName = entry.teacher;
    const sessions = entry.sessions;

    const teacherBlock = document.createElement("div");
    teacherBlock.className = "teacher-block";
    teacherBlock.style.marginBottom = "1em";

    const title = document.createElement("strong");
    title.textContent = teacherName;
    teacherBlock.appendChild(title);

    const checkboxRow = document.createElement("div");
    checkboxRow.className = "checkbox-row";

    // Full Day checkbox
    const fullDayId = `absent-${tIndex}-fullday`;
    const fullDayBox = createCheckbox(fullDayId, "Full Day", {
      teacherIndex: tIndex,
      teacherName
    });
    checkboxRow.appendChild(fullDayBox);

    // Collect session checkboxes
    const sessionCheckboxes = [];

    let currentHour = baseHour;
    let currentMinute = baseMinute;

    sessions.forEach((session, sIndex) => {
      const duration = session.duration;
      const startTime = formatTime(currentHour, currentMinute);

      const endMinute = currentMinute + duration;
      let endHour = currentHour;
      let adjEndMinute = endMinute;

      if (endMinute >= 60) {
        endHour += Math.floor(endMinute / 60);
        adjEndMinute = endMinute % 60;
      }

      const endTime = formatTime(endHour, adjEndMinute);

      const sessionId = `absent-${tIndex}-session-${sIndex}`;
      const sessionBox = createCheckbox(sessionId, startTime, {
        teacherIndex: tIndex,
        sessionIndex: sIndex,
        startTime,
        endTime,
        teacherName
      });

      checkboxRow.appendChild(sessionBox);
      sessionCheckboxes.push(sessionBox.querySelector("input"));

      // Update time
      currentMinute += duration;
      if (currentMinute >= 60) {
        currentHour += Math.floor(currentMinute / 60);
        currentMinute %= 60;
      }
    });

    // Full Day disables/enables sessions
    const fullDayCheckbox = fullDayBox.querySelector("input");
    fullDayCheckbox.addEventListener("change", () => {
      const disabled = fullDayCheckbox.checked;
      sessionCheckboxes.forEach(cb => {
        cb.disabled = disabled;
        if (disabled) cb.checked = false;
      });
      updateSummary();
    });

    teacherBlock.appendChild(checkboxRow);
    container.appendChild(teacherBlock);
  });

  updateSummary();

  function formatTime(hour, minute) {
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  }

  function createCheckbox(id, labelText, data = {}) {
    const wrapper = document.createElement("div");
    wrapper.className = "checkbox-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = id;
    checkbox.id = id;
    checkbox.value = labelText;

    for (const [key, value] of Object.entries(data)) {
      checkbox.dataset[key] = value;
    }

    const label = document.createElement("label");
    label.htmlFor = id;
    label.appendChild(checkbox);
    label.append(` ${labelText}`);

    wrapper.appendChild(label);
    // checkbox.addEventListener("change", updateSummary);
    checkbox.addEventListener("change", () => {
      const teacherName = checkbox.dataset.teacherName;
      const sessionIndex = checkbox.dataset.sessionIndex;
      const startTime = checkbox.dataset.startTime;
      const endTime = checkbox.dataset.endTime;
      const isFullDay = sessionIndex === undefined;
    
      if (isFullDay) {
        console.log(`Changed: ${teacherName} - Full Day - ${checkbox.checked ? 'Absent' : 'Present'}`);
      } else {
        console.log(`Changed: ${teacherName} - Session ${sessionIndex} (${startTime} to ${endTime}) - ${checkbox.checked ? 'Absent' : 'Present'}`);
      }
    
      updateSummary();
    });    
    return wrapper;
  }
});

document.getElementById('absentDate').addEventListener('change', function () {
  const date = new Date(this.value);
  const options = { weekday: 'long' };
  const day = date.toLocaleDateString('en-US', options);
  document.getElementById('absentDay').value = day;
});

document.getElementById("selectAllBtn").addEventListener("click", () => {
  console.log("Select All button clicked: setting all teachers to Full Day absent");
  const allCheckboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');

  // Uncheck and enable everything first
  allCheckboxes.forEach(cb => {
    cb.checked = false;
    cb.disabled = false;
  });

  // Check Full Day and disable sessions
  allCheckboxes.forEach(cb => {
    if (cb.name.includes("fullday")) {
      cb.checked = true;
      const teacherPrefix = cb.name.split("-fullday")[0];
      const sessionCheckboxes = document.querySelectorAll(`input[name^="${teacherPrefix}-session"]`);
      sessionCheckboxes.forEach(sessionCb => {
        sessionCb.checked = false;
        sessionCb.disabled = true;
      });
    }
  });

  updateSummary();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  console.log("Reset button clicked: clearing all selections and enabling all checkboxes");
  const allCheckboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
  allCheckboxes.forEach(cb => {
    cb.checked = false;
    cb.disabled = false;
  });
  updateSummary();
});

function updateSummary() {
  const total = timetable.length;
  let absent = 0;

  timetable.forEach((entry, index) => {
    const fullDayCheckbox = document.querySelector(`input[name="absent-${index}-fullday"]`);
    const sessionCheckboxes = document.querySelectorAll(`input[name^="absent-${index}-session"]`);
    const isAbsent = fullDayCheckbox.checked || Array.from(sessionCheckboxes).some(cb => cb.checked);
    if (isAbsent) absent++;
  });

  const present = total - absent;

  document.getElementById("totalCount").textContent = total;
  document.getElementById("presentCount").textContent = present;
  document.getElementById("absentCount").textContent = absent;
}
