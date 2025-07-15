# 🗓️ Relief Timetable Generator

This web-based tool helps schools or administrators automatically assign relief (substitute) teachers when regular teachers are absent. It generates a structured timetable that ensures fair and conflict-free relief assignments, with options for manual adjustments.

---

## 🌟 Features

- Select full-day or specific-session absences.
- Automatically generate relief assignments.
- Groups back-to-back sessions with same class & subject under a single relief teacher.
- Prevents double-booking of relief teachers.
- Dropdowns show available/unavailable teachers (based on timetable).
- Teachers already assigned in overlapping sessions are disabled in dropdowns.
- Manual override supported.
- Selections and assignments are saved using `localStorage` and persist on reload.

---

## 📋 How It Works

### Data Source
- All teacher schedules and session details are loaded from a `data.js` file.
- Each session has: teacher name, class, subject, start time, and end time.

---

## 📐 Relief Generation Rules

1. **Back-to-back Grouping**
   - Sessions for the same absent teacher are grouped **if:**
     - They are **consecutive** (no time gap).
     - The **class** and **subject** are identical.
   - A single relief teacher is assigned to the entire group.

2. **Timetable-Based Availability**
   - Teachers are marked as:
     - **Available**: No clash in their original timetable.
     - **Unavailable**: Already have a class during that time.
   - This classification **does not change**, even if they get assigned relief later.

3. **Double-Booking Prevention**
   - If a teacher is already assigned as relief for a session that overlaps in time, they are **disabled** in the dropdowns of conflicting sessions.
   - This prevents assigning the same teacher to two overlapping relief sessions.

4. **Manual Overrides**
   - Users can change the relief teacher from the dropdown.
   - Dropdowns still respect double-booking prevention by disabling busy teachers.

5. **Persistence**
   - All generated timetables and selections are saved in `localStorage`.
   - Refreshing the page restores the table and selections exactly as they were.

---

## ✅ How to Use

### 1. Mark Absent Teachers
- Use the **checkbox list** to mark which teacher(s) are absent.
- You can choose:
  - **Full-day absence**: All sessions will be included.
  - **Specific sessions**: Choose which periods the teacher is absent for.

### 2. Generate Relief
- Click the `Generate Relief Timetable` button.
- The table will be populated with:
  - Absent teacher name
  - Classroom
  - Subject
  - Time (start–end)
  - Dropdown to select relief teacher

### 3. Adjust Assignments (Optional)
- Manually change relief teachers using the dropdowns.
- Teachers already assigned elsewhere at the same time will be **disabled**.

### 4. Save Automatically
- All changes are saved to the browser automatically.
- Reloading the page restores the same relief plan.

---

## 🛠 Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)
- Data from `data.js`
- `localStorage` for persistence

---

## 👤 Author

Idham Malik  

