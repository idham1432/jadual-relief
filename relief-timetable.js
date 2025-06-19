const absentTeachersContainer = document.getElementById('absentTeachersContainer');

function renderAbsentTeacherCheckboxes() {
  timetable.forEach(teacher => {
    const label = document.createElement('label');
    label.style.display = 'block';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = teacher.teacher;
    checkbox.name = 'absentTeachers';

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(` ${teacher.teacher}`));
    absentTeachersContainer.appendChild(label);
  });
}

renderAbsentTeacherCheckboxes();

const generateReliefBtn = document.getElementById('generateReliefBtn');
const reliefContainer = document.createElement('div');
reliefContainer.id = 'reliefTimetable';
document.body.appendChild(reliefContainer);

const BASE_HOUR = 7;
const BASE_MINUTE = 30;

function getSessionStart(index, sessions) {
  let minutesFromStart = 0;
  for (let i = 0; i < index; i++) {
    minutesFromStart += sessions[i].duration;
  }
  const totalMinutes = BASE_HOUR * 60 + BASE_MINUTE + minutesFromStart;
  const hour = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  return `${pad(hour)}:${pad(minute)}`;
}

function getSessionEnd(index, sessions) {
  let minutesFromStart = 0;
  for (let i = 0; i <= index; i++) {
    minutesFromStart += sessions[i].duration;
  }
  const totalMinutes = BASE_HOUR * 60 + BASE_MINUTE + minutesFromStart;
  const hour = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  return `${pad(hour)}:${pad(minute)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function isOverlap(start1, end1, start2, end2) {
  const toMinutes = time => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };
  const s1 = toMinutes(start1), e1 = toMinutes(end1);
  const s2 = toMinutes(start2), e2 = toMinutes(end2);
  return Math.max(s1, s2) < Math.min(e1, e2);
}

function countTeachingSessions(teacherData) {
  if (!teacherData || !Array.isArray(teacherData.sessions)) return 0;
  return teacherData.sessions.filter(s => s.subject).length;
}

function selOptionIsSpecial(select) {
  const selectedOption = select.options[select.selectedIndex];
  const optgroup = selectedOption?.parentElement;
  return optgroup?.label === 'Special Cases';
}

function generateManualReliefTable(absentTeachers) {
  const manualWrapper = document.createElement('div');
  manualWrapper.id = 'manualReliefWrapper'; // wrapper for PDF
  reliefContainer.appendChild(manualWrapper);

  const h2 = document.createElement('h2');
  h2.textContent = 'Relief Timetable';
  manualWrapper.appendChild(h2);

  const manualDateWrapper = document.createElement('p');
  manualDateWrapper.innerHTML = `Date: <input type="date" id="manualReliefDate">`;
  const manualDayWrapper = document.createElement('p');
  manualDayWrapper.innerHTML = `Day: <span id="manualReliefDay"></span>`;
  manualWrapper.appendChild(manualDateWrapper);
  manualWrapper.appendChild(manualDayWrapper);

  const manualDateInput = manualDateWrapper.querySelector('input');
  const manualDaySpan = manualDayWrapper.querySelector('span');
  manualDateInput.addEventListener('change', () => {
    const date = new Date(manualDateInput.value);
    const options = { weekday: 'long' };
    manualDaySpan.textContent = isNaN(date) ? '' : date.toLocaleDateString('en-US', options);
  });

  const table = document.createElement('table');
  table.style.width = '100%';
  table.border = '1';

  const colgroup = document.createElement('colgroup');
  ['30%', '13.33%', '13.33%', '13.33%', '30%'].forEach(width => {
    const col = document.createElement('col');
    col.style.width = width;
    colgroup.appendChild(col);
  });

  table.appendChild(colgroup);

  const headerRow = table.insertRow();
  ['Absent Teacher', 'Classroom', 'Subject', 'Time', 'Relief Teacher'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });

  absentTeachers.forEach(absent => {
    const absentData = timetable.find(t => t.teacher === absent);
    if (!absentData) return;

    const sessions = absentData.sessions;

    let i = 0;
    while (i < sessions.length) {
      const session = sessions[i];
      if (!session.subject) {
        i++;
        continue;
      }

      // Grouping logic for back-to-back sessions
      let j = i + 1;
      while (
        j < sessions.length &&
        sessions[j].subject === session.subject &&
        sessions[j].classroom === session.classroom
      ) {
        j++;
      }

      for (let k = i; k < j; k++) {
        const s = sessions[k];
        const row = table.insertRow();
        row.insertCell().textContent = absent;
        row.insertCell().textContent = s.classroom;
        row.insertCell().textContent = s.subject;
        row.insertCell().textContent = `${getSessionStart(k, sessions)} - ${getSessionEnd(k, sessions)}`;

        const select = document.createElement('select');
        select.style.width = '100%';
        const option = document.createElement('option');
        option.textContent = '-- Select Teacher --';
        option.value = '';
        select.appendChild(option);

        const sortedTeachers = [...timetable].sort((a, b) => countTeachingSessions(a) - countTeachingSessions(b));

        const optGroupAvailable = document.createElement('optgroup');
        optGroupAvailable.label = "Available Teachers";

        const optGroupUnavailable = document.createElement('optgroup');
        optGroupUnavailable.label = "Unavailable Teachers";

        const optGroupSpecial = document.createElement('optgroup');
        optGroupSpecial.label = "Special Cases";

        // Session timing for this task
        const taskStart = getSessionStart(k, sessions);
        const taskEnd = getSessionEnd(k, sessions);

        sortedTeachers.forEach(t => {
          if (absentTeachers.includes(t.teacher)) return; // Skip any absent teachers

          const sessionCount = countTeachingSessions(t);

          // Check if this teacher is busy during this session
          let isAvailable = true;

          for (let tsIndex = 0; tsIndex < t.sessions.length; tsIndex++) {
            const ts = t.sessions[tsIndex];
            if (!ts.subject) continue;
            const tsStart = getSessionStart(tsIndex, t.sessions);
            const tsEnd = getSessionEnd(tsIndex, t.sessions);
            if (isOverlap(taskStart, taskEnd, tsStart, tsEnd)) {
              isAvailable = false;
              break;
            }
          }

          const opt = document.createElement('option');
          opt.value = t.teacher;

          if (isAvailable) {
            opt.textContent = `${t.teacher} (${sessionCount})`;
            optGroupAvailable.appendChild(opt);
          } else {
            opt.textContent = `🚫 ${t.teacher} (${sessionCount})`;  // visually distinguish
            optGroupUnavailable.appendChild(opt);
          }
        });

        // Example: Add a special case option
        const specialCase = [
          'PROGRAM', 'PENGAWAS', 'MURID DI KELAS', 'MURID DI DEWAN', 'MURID DI DATARAN'
        ];

        specialCase.forEach(event => {
          const opt = document.createElement('option');
          opt.value = event;
          opt.textContent = `⭐️ ${event}`;
          optGroupSpecial.appendChild(opt);
        });

        select.appendChild(optGroupAvailable);
        select.appendChild(optGroupUnavailable);
        select.appendChild(optGroupSpecial);

        select.addEventListener('change', saveManualSelections);

        // Track session time for collision logic
        select.setAttribute('data-session-time', `${taskStart}-${taskEnd}`);

        // Add event listener to prevent duplicate assignments for same time
        select.addEventListener('change', () => {
          const selectedValue = select.value;
          const sessionTime = select.getAttribute('data-session-time');

          document.querySelectorAll('select[data-session-time]').forEach(otherSelect => {
            const otherSessionTime = otherSelect.getAttribute('data-session-time');

            // Collect all selected teacher values (excluding special cases)
            const allSelected = Array.from(document.querySelectorAll('select'))
              .map(sel => sel.value)
              .filter(v => v && !selOptionIsSpecial(sel));

            otherSelect.querySelectorAll('option').forEach(option => {
              const optgroup = option.parentElement;
              const isSpecialCase = optgroup && optgroup.label === 'Special Cases';

              if (isSpecialCase) {
                option.disabled = false; // always keep special cases enabled
                return;
              }

              const isSelectedInSameTime = (
                option.value === selectedValue &&
                sessionTime === otherSessionTime &&
                selectedValue !== ""
              );

              if (isSelectedInSameTime) {
                option.disabled = true;
              } else if (!allSelected.includes(option.value)) {
                option.disabled = false;
              }
            });
          });
        });

        const td = document.createElement('td');
        td.appendChild(select);
        row.appendChild(td);

      }

      i = j;
    }
  });

  manualWrapper.appendChild(table);

  // 📥 Add Download Button
  const downloadBtn = document.createElement('button');
  downloadBtn.className = 'download-pdf-btn';
  downloadBtn.textContent = 'Download PDF';
  downloadBtn.style.marginTop = '10px';
  downloadBtn.onclick = downloadManualReliefPDF;
  manualWrapper.appendChild(downloadBtn);

  // 📷 Add Download PNG Button
  const pngDownloadBtn = document.createElement('button');
  pngDownloadBtn.className = 'download-png-btn';
  pngDownloadBtn.textContent = 'Download PNG';
  pngDownloadBtn.style.marginTop = '10px';
  pngDownloadBtn.style.marginLeft = '10px';
  pngDownloadBtn.onclick = downloadManualReliefPNG;
  manualWrapper.appendChild(pngDownloadBtn);

  // 🧹 Add Reset Button
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reset Dropdowns';
  resetBtn.style.marginTop = '10px';
  resetBtn.style.marginLeft = '10px';
  resetBtn.addEventListener('click', () => {
    localStorage.removeItem('manualReliefSelections');
    document.querySelectorAll('#manualReliefWrapper select').forEach(dropdown => {
      dropdown.selectedIndex = 0; // Reset to first option
      dropdown.dispatchEvent(new Event('change')); // Reapply logic if needed
    });
  });

  manualWrapper.appendChild(resetBtn);

  // ✅ Restore dropdown selections from localStorage
  const savedSelections = JSON.parse(localStorage.getItem('manualReliefSelections') || '{}');

  document.querySelectorAll('#manualReliefWrapper select').forEach((dropdown, index) => {
    if (savedSelections[index]) {
      dropdown.value = savedSelections[index];
      dropdown.dispatchEvent(new Event('change')); // applies the disabling logic too
    }
  });

}

function saveManualSelections() {
  const selections = {};
  document.querySelectorAll('#manualReliefWrapper select').forEach((dropdown, index) => {
    selections[index] = dropdown.value;
  });
  localStorage.setItem('manualReliefSelections', JSON.stringify(selections));
}

async function downloadManualReliefPDF() {
  const wrapper = document.getElementById("manualReliefWrapper");
  if (!wrapper || !wrapper.innerHTML.trim()) {
    alert("No manual relief timetable to export!");
    return;
  }

  const originalStyle = wrapper.getAttribute("style") || "";

  // Adjust styles for rendering
  wrapper.style.overflow = "visible";
  wrapper.style.width = "auto";
  wrapper.style.maxWidth = "none";

  await new Promise(resolve => requestAnimationFrame(resolve));

  const canvas = await html2canvas(wrapper, {
    scale: 1.5,
    useCORS: true,
    scrollY: -window.scrollY,
    windowWidth: document.body.scrollWidth
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.85);
  const { jsPDF } = window.jspdf;

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4"
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = canvas.height * (imgWidth / canvas.width);

  let y = 0;
  let remainingHeight = imgHeight;

  while (remainingHeight > 0) {
    pdf.addImage(imgData, "JPEG", 0, y === 0 ? 0 : -y, imgWidth, imgHeight);
    remainingHeight -= pageHeight;

    if (remainingHeight > 0) {
      pdf.addPage();
      y += pageHeight;
    }
  }

  pdf.save("manual-relief-timetable.pdf");

  // Restore original style
  wrapper.setAttribute("style", originalStyle);
}

async function downloadManualReliefPNG() {
  const wrapper = document.getElementById("manualReliefWrapper");
  if (!wrapper || !wrapper.innerHTML.trim()) {
    alert("No manual relief timetable to export!");
    return;
  }

  const originalStyle = wrapper.getAttribute("style") || "";

  // Adjust styles for rendering
  wrapper.style.overflow = "visible";
  wrapper.style.width = "auto";
  wrapper.style.maxWidth = "none";

  await new Promise(resolve => requestAnimationFrame(resolve));

  const canvas = await html2canvas(wrapper, {
    scale: 2,
    useCORS: true,
    scrollY: -window.scrollY,
    windowWidth: document.body.scrollWidth
  });

  const link = document.createElement('a');
  link.download = 'manual-relief-timetable.png';
  link.href = canvas.toDataURL("image/png");
  link.click();

  // Restore original style
  wrapper.setAttribute("style", originalStyle);
}

function generateRelief() {
  const checkboxes = document.querySelectorAll('input[name="absentTeachers"]:checked');
  const absentTeachers = Array.from(checkboxes).map(cb => cb.value);

  reliefContainer.innerHTML = '';

  // Wrapper div for the whole timetable content
  const wrapper = document.createElement('div');
  wrapper.id = 'relief-timetable';
  reliefContainer.appendChild(wrapper);

  // Create and append heading
  const heading = document.createElement('h2');
  heading.textContent = 'Relief Timetable';
  wrapper.appendChild(heading);

  // Create and append Date picker
  const datePara = document.createElement('p');
  datePara.innerHTML = 'Date: <input type="date" id="reliefDate">';
  wrapper.appendChild(datePara);

  // Create and append Day display
  const dayPara = document.createElement('p');
  dayPara.innerHTML = 'Day: <span id="reliefDay"></span>';
  wrapper.appendChild(dayPara);

  // Listen for date change and update day
  const dateInput = datePara.querySelector('#reliefDate');
  const daySpan = dayPara.querySelector('#reliefDay');
  dateInput.addEventListener('change', () => {
    const date = new Date(dateInput.value);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    daySpan.textContent = isNaN(date) ? '' : dayName;
  });

  const table = document.createElement('table');
  table.id = 'relief-table';
  table.style.width = '100%';
  table.border = '1';

  const colgroup = document.createElement('colgroup');
  ['30%', '13.33%', '13.33%', '13.33%', '30%'].forEach(width => {
    const col = document.createElement('col');
    col.style.width = width;
    colgroup.appendChild(col);
  });
  table.appendChild(colgroup);

  const headerRow = table.insertRow();
  ['Absent Teacher', 'Classroom', 'Subject', 'Time', 'Relief Teacher'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });

  const reliefAssignments = [];

  absentTeachers.forEach(absent => {
    const absentData = timetable.find(t => t.teacher === absent);
    if (!absentData) return;

    const sessions = absentData.sessions;

    let i = 0;
    while (i < sessions.length) {
      const session = sessions[i];
      if (!session.subject) {
        i++;
        continue;
      }

      // Group back-to-back same subject & class
      let j = i + 1;
      while (
        j < sessions.length &&
        sessions[j].subject === session.subject &&
        sessions[j].classroom === session.classroom
      ) {
        j++;
      }

      const availableTeachers = timetable.filter(t => {
        if (absentTeachers.includes(t.teacher)) return false;

        for (let k = i; k < j; k++) {
          const theirSession = t.sessions[k];
          if (!theirSession || theirSession.subject) return false;

          const blockSessionStart = getSessionStart(k, sessions);
          const blockSessionEnd = getSessionEnd(k, sessions);

          for (let a of reliefAssignments) {
            if (
              a.teacher === t.teacher &&
              isOverlap(a.start, a.end, blockSessionStart, blockSessionEnd)
            ) {
              return false;
            }
          }

          for (let s = 0; s < t.sessions.length; s++) {
            const ts = t.sessions[s];
            if (!ts.subject) continue;
            const tsStart = getSessionStart(s, t.sessions);
            const tsEnd = getSessionEnd(s, t.sessions);
            if (isOverlap(blockSessionStart, blockSessionEnd, tsStart, tsEnd)) return false;
          }
        }

        return true;
      });

      const relief = availableTeachers.length
        ? availableTeachers[Math.floor(Math.random() * availableTeachers.length)]
        : null;

      for (let k = i; k < j; k++) {
        const s = sessions[k];
        const row = table.insertRow();
        row.insertCell().textContent = absent;
        row.insertCell().textContent = s.classroom;
        row.insertCell().textContent = s.subject;
        const startTime = getSessionStart(k, sessions);
        const endTime = getSessionEnd(k, sessions);
        row.insertCell().textContent = `${startTime} - ${endTime}`;

        const tdRelief = row.insertCell();
        if (relief) {
          tdRelief.textContent = relief.teacher;
          reliefAssignments.push({
            teacher: relief.teacher,
            start: startTime,
            end: endTime,
          });          
        } else {
          tdRelief.textContent = "No relief available";
          tdRelief.style.color = "red";
          tdRelief.style.fontStyle = "italic";
        }
      }

      i = j;
    }
  });

  wrapper.appendChild(table);

  // Add "Download PDF" button
  const downloadBtn = document.createElement('button');
  downloadBtn.className = 'download-pdf-btn';
  downloadBtn.textContent = 'Download PDF';
  downloadBtn.style.marginTop = '10px';
  downloadBtn.style.marginBottom = '30px';
  downloadBtn.addEventListener('click', downloadPDF);
  wrapper.appendChild(downloadBtn);

  // Add "Download PNG" button
  const pngDownloadBtn = document.createElement('button');
  pngDownloadBtn.className = 'download-png-btn';
  pngDownloadBtn.textContent = 'Download PNG';
  pngDownloadBtn.style.marginTop = '10px';
  pngDownloadBtn.style.marginLeft = '10px';
  pngDownloadBtn.style.marginBottom = '30px';
  pngDownloadBtn.addEventListener('click', downloadAutoReliefPNG);
  wrapper.appendChild(pngDownloadBtn);

  // Generate manual relief table
  generateManualReliefTable(absentTeachers);

  // Save to localStorage
  localStorage.setItem('absentTeachers', JSON.stringify(absentTeachers));
  localStorage.setItem('reliefTableHTML', table.outerHTML);
  const table2 = document.getElementById('relief-table-2');
  if (table2) {
    localStorage.setItem('reliefTable2HTML', table2.outerHTML);
  }
};

generateReliefBtn.addEventListener('click', generateRelief);

const resetCheckboxesBtn = document.getElementById('resetCheckboxesBtn');

resetCheckboxesBtn.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('input[name="absentTeachers"]');
  checkboxes.forEach(cb => cb.checked = false);
});

document.getElementById('selectAllBtn').addEventListener('click', () => {
  document.querySelectorAll('#absentTeachersContainer input[type="checkbox"]').forEach(cb => {
    cb.checked = true;
  });
});

async function downloadPDF() {
  const tableDiv = document.getElementById("relief-timetable");
  if (!tableDiv || !tableDiv.innerHTML.trim()) {
    alert("No timetable to export!");
    return;
  }

  const originalStyle = tableDiv.getAttribute("style") || "";

  // Temporarily adjust styles for rendering
  tableDiv.style.overflow = "visible";
  tableDiv.style.width = "auto";
  tableDiv.style.maxWidth = "none";

  await new Promise(resolve => requestAnimationFrame(resolve));

  const canvas = await html2canvas(tableDiv, {
    scale: 1.5, // Reduced scale for better performance
    useCORS: true,
    scrollY: -window.scrollY,
    windowWidth: document.body.scrollWidth
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.85); // JPEG reduces file size
  const { jsPDF } = window.jspdf;

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4"
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = canvas.height * (imgWidth / canvas.width);

  let y = 0;
  let remainingHeight = imgHeight;

  while (remainingHeight > 0) {
    pdf.addImage(imgData, "JPEG", 0, y === 0 ? 0 : -y, imgWidth, imgHeight);
    remainingHeight -= pageHeight;

    if (remainingHeight > 0) {
      pdf.addPage();
      y += pageHeight;
    }
  }

  pdf.save("relief-timetable.pdf");

  // Restore original style
  tableDiv.setAttribute("style", originalStyle);
}

async function downloadAutoReliefPNG() {
  const tableDiv = document.getElementById("relief-timetable");
  if (!tableDiv || !tableDiv.innerHTML.trim()) {
    alert("No relief timetable to export!");
    return;
  }

  const originalStyle = tableDiv.getAttribute("style") || "";

  // Temporarily adjust styles for better capture
  tableDiv.style.overflow = "visible";
  tableDiv.style.width = "auto";
  tableDiv.style.maxWidth = "none";

  await new Promise(resolve => requestAnimationFrame(resolve));

  const canvas = await html2canvas(tableDiv, {
    scale: 2,
    useCORS: true,
    scrollY: -window.scrollY,
    windowWidth: document.body.scrollWidth
  });

  const link = document.createElement('a');
  link.download = 'relief-timetable.png';
  link.href = canvas.toDataURL("image/png");
  link.click();

  // Restore original style
  tableDiv.setAttribute("style", originalStyle);
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTable1 = localStorage.getItem('reliefTableHTML');
  const savedTable2 = localStorage.getItem('reliefTable2HTML');
  const savedTeachers = JSON.parse(localStorage.getItem('absentTeachers') || '[]');

  if (savedTable1 || savedTable2) {
    reliefContainer.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.id = 'relief-timetable';
    reliefContainer.appendChild(wrapper);

    const heading = document.createElement('h2');
    heading.textContent = 'Relief Timetable';
    wrapper.appendChild(heading);

    const datePara = document.createElement('p');
    datePara.innerHTML = 'Date: <input type="date" id="reliefDate">';
    wrapper.appendChild(datePara);

    const dayPara = document.createElement('p');
    dayPara.innerHTML = 'Day: <span id="reliefDay"></span>';
    wrapper.appendChild(dayPara);

    const dateInput = datePara.querySelector('#reliefDate');
    const daySpan = dayPara.querySelector('#reliefDay');
    dateInput.addEventListener('change', () => {
      const date = new Date(dateInput.value);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      daySpan.textContent = isNaN(date) ? '' : dayName;
    });

    if (savedTable1) {
      const div1 = document.createElement('div');
      div1.innerHTML = savedTable1;
      wrapper.appendChild(div1.firstChild);
    }

    if (savedTable2) {
      const div2 = document.createElement('div');
      div2.innerHTML = savedTable2;
      wrapper.appendChild(div2.firstChild);
    }

    // Also recheck saved checkboxes
    document.querySelectorAll('input[name="absentTeachers"]').forEach(cb => {
      cb.checked = savedTeachers.includes(cb.value);
    });

    // Restore Download Buttons
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'download-pdf-btn';
    downloadBtn.textContent = 'Download PDF';
    downloadBtn.style.marginTop = '10px';
    downloadBtn.style.marginBottom = '30px';
    downloadBtn.addEventListener('click', downloadPDF);
    wrapper.appendChild(downloadBtn);

    const pngDownloadBtn = document.createElement('button');
    pngDownloadBtn.className = 'download-png-btn';
    pngDownloadBtn.textContent = 'Download PNG';
    pngDownloadBtn.style.marginTop = '10px';
    pngDownloadBtn.style.marginLeft = '10px';
    pngDownloadBtn.style.marginBottom = '30px';
    pngDownloadBtn.addEventListener('click', downloadAutoReliefPNG);
    wrapper.appendChild(pngDownloadBtn);

    // 🔥 Recreate manual relief table (important!)
    generateManualReliefTable(savedTeachers);
  }
});
