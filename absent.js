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
    const fullDayBox = createCheckbox(fullDayId, "Full Day");
    checkboxRow.appendChild(fullDayBox);
  
    // Collect session checkboxes
    const sessionCheckboxes = [];
  
    let currentHour = baseHour;
    let currentMinute = baseMinute;
  
    sessions.forEach((session, sIndex) => {
      const duration = session.duration;
      const startTime = formatTime(currentHour, currentMinute);
  
      const sessionId = `absent-${tIndex}-session-${sIndex}`;
      const sessionBox = createCheckbox(sessionId, startTime);
      checkboxRow.appendChild(sessionBox);
      sessionCheckboxes.push(sessionBox.querySelector("input"));
  
      // Update time
      currentMinute += duration;
      if (currentMinute >= 60) {
        currentHour += Math.floor(currentMinute / 60);
        currentMinute %= 60;
      }
    });
  
    // Add behavior: Full Day disables/enables session checkboxes
    const fullDayCheckbox = fullDayBox.querySelector("input");
    fullDayCheckbox.addEventListener("change", () => {
      const disabled = fullDayCheckbox.checked;
      sessionCheckboxes.forEach(cb => {
        cb.disabled = disabled;
        if (disabled) cb.checked = false;
      });
      updateSummaryBar();
    });
  
    teacherBlock.appendChild(checkboxRow);
    container.appendChild(teacherBlock);
  });
  
  updateSummary();

  function formatTime(hour, minute) {
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  }

  function createCheckbox(name, labelText) {
    const wrapper = document.createElement("div");
    wrapper.className = "checkbox-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = labelText;

    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.append(` ${labelText}`);

    wrapper.appendChild(label);
    checkbox.addEventListener("change", updateSummary);
    return wrapper;
  }
});

document.getElementById("selectAllBtn").addEventListener("click", () => {
  const allCheckboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');

  // Uncheck everything first
  allCheckboxes.forEach(cb => {
    cb.checked = false;
    cb.disabled = false;
  });

  // Select all Full Day checkboxes and disable related session checkboxes
  allCheckboxes.forEach(cb => {
    if (cb.name.includes("fullday")) {
      cb.checked = true;

      // Find corresponding session checkboxes for this teacher
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
    const teacherId = `absent-${index}`;
    const fullDayCheckbox = document.querySelector(`input[name="${teacherId}-fullday"]`);
    const sessionCheckboxes = document.querySelectorAll(`input[name^="${teacherId}-session"]`);

    // Check if any checkbox is checked (full day or any session)
    const isAbsent = fullDayCheckbox.checked || Array.from(sessionCheckboxes).some(cb => cb.checked);
    if (isAbsent) absent++;
  });

  const present = total - absent;

  document.getElementById("totalCount").textContent = total;
  document.getElementById("presentCount").textContent = present;
  document.getElementById("absentCount").textContent = absent;
}