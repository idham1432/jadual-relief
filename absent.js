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
    const fullDayBox = createCheckbox(`absent-${tIndex}-fullday`, "Full Day");
    checkboxRow.appendChild(fullDayBox);

    let currentHour = baseHour;
    let currentMinute = baseMinute;

    sessions.forEach((session, sIndex) => {
      const duration = session.duration;

      const startTime = formatTime(currentHour, currentMinute);
      const sessionBox = createCheckbox(`absent-${tIndex}-session-${sIndex}`, startTime);
      checkboxRow.appendChild(sessionBox);

      // Update time for next session
      currentMinute += duration;
      if (currentMinute >= 60) {
        currentHour += Math.floor(currentMinute / 60);
        currentMinute %= 60;
      }
    });

    teacherBlock.appendChild(checkboxRow);
    container.appendChild(teacherBlock);
  });

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
    return wrapper;
  }
});
document.getElementById("selectAllBtn").addEventListener("click", () => {
  const allCheckboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');

  // Uncheck all first
  allCheckboxes.forEach(cb => cb.checked = false);

  // Check only Full Day checkboxes
  allCheckboxes.forEach(cb => {
    if (cb.name.includes("fullday")) {
      cb.checked = true;
    }
  });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  const allCheckboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
  allCheckboxes.forEach(cb => cb.checked = false);
});
