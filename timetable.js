document.querySelectorAll('.accordion').forEach(accordion => {
  accordion.addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    const container = this.parentElement;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      container.classList.remove('expanded');
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      container.classList.add('expanded');
    }
  });
});


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
        sessionCell.style.display = 'flex';
        sessionCell.style.flexDirection = 'column';
        sessionCell.style.justifyContent = 'center';
        sessionCell.style.overflow = 'hidden'; // Ensure container handles overflow
      
        // Create subject text
        const subjectDiv = document.createElement('div');
        subjectDiv.textContent = session.subject || "";
        subjectDiv.style.overflow = 'hidden';
        subjectDiv.style.whiteSpace = 'nowrap';
        subjectDiv.style.textOverflow = 'ellipsis';
      
        // Create classroom text
        const classDiv = document.createElement('div');
        classDiv.classList.add('classroom');
        classDiv.textContent = session.classroom || "";
        classDiv.style.fontSize = "0.8em";
        classDiv.style.overflow = 'hidden';
        classDiv.style.whiteSpace = 'nowrap';
        classDiv.style.textOverflow = 'ellipsis';
      
        // Add to session cell
        sessionCell.appendChild(subjectDiv);
        sessionCell.appendChild(classDiv);
      
        // Flex based on duration
        sessionCell.style.flex = session.duration === 20 ? "0.66" : "1";
      
        // Add soft background color only if subject exists
        if (session.subject) {
          sessionCell.style.backgroundColor = "rgba(224, 176, 255, 0.3)";
        }
      
        row.appendChild(sessionCell);
      });         
  
      container.appendChild(row);
    });