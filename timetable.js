var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const container = document.getElementById('timetableContainer');
  
    // ✅ Create and append header row just ONCE
    const headerRow = document.createElement('div');
    headerRow.classList.add('row');
  
    const nameHeader = document.createElement('div');
    nameHeader.classList.add('cell', 'name');
    nameHeader.textContent = "Name";
    nameHeader.style.flex = "2";
    headerRow.appendChild(nameHeader);
  
    period.forEach((time, index) => {
      const periodCell = document.createElement('div');
      periodCell.classList.add('cell');
      periodCell.textContent = time;
      periodCell.style.flex = index === 4 ? "0.66" : "1";
      headerRow.appendChild(periodCell);
    });
  
    container.appendChild(headerRow);
  
    // 🧑‍🏫 Loop through each teacher to create a row
    timetable.forEach(teacher => {
      const row = document.createElement('div');
      row.classList.add('row');
  
      const nameCell = document.createElement('div');
      nameCell.classList.add('cell', 'name');
      nameCell.textContent = teacher.teacher;
      nameCell.style.flex = "2";
      row.appendChild(nameCell);
  
      teacher.sessions.forEach((session, index) => {
        const sessionCell = document.createElement('div');
        sessionCell.classList.add('cell');
        sessionCell.textContent = session.subject || "";
  
        // Flex based on duration
        sessionCell.style.flex = session.duration === 20 ? "0.66" : "1";

        // Add soft background color only if subject exists
        if (session.subject) {
          sessionCell.style.backgroundColor = "rgba(224, 176, 255, 0.3)"; // light blue; you can change this
        }
  
        row.appendChild(sessionCell);
      });
  
      container.appendChild(row);
    });