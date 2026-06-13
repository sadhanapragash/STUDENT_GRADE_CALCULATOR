const SUBJECTS = [
  { key: "french", label: "FRENCH" },
  { key: "english", label: "ENGLISH" },
  { key: "maths", label: "MATHS" },
  { key: "science", label: "SCIENCE" },
  { key: "social", label: "SOCIAL" },
];

const PASS_MARK = 35;

const form = document.getElementById("grade-form");
const formError = document.getElementById("form-error");
const reportSection = document.getElementById("report-section");
const resetBtn = document.getElementById("reset-btn");

function getGrade(percentage) {
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";
  return "F";
}

function getResult(marks) {
  const hasFailingSubject = marks.some((mark) => mark < PASS_MARK);
  return hasFailingSubject ? "FAIL" : "PASS";
}

function parseMark(value) {
  const num = Number(value);
  if (!Number.isFinite(num) || !Number.isInteger(num)) return null;
  if (num < 0 || num > 100) return null;
  return num;
}

function validateForm(name, marks) {
  if (!name.trim()) {
    return "Please enter a student name.";
  }

  for (const subject of SUBJECTS) {
    if (marks[subject.key] === null) {
      return `Please enter valid marks (0–100) for ${subject.label}.`;
    }
  }

  return "";
}

function renderReportCard({ name, marks, total, percentage, grade, result }) {
  document.getElementById("report-name").textContent = name;

  const marksList = document.getElementById("report-marks");
  marksList.innerHTML = "";

  SUBJECTS.forEach((subject) => {
    const mark = marks[subject.key];
    const li = document.createElement("li");
    if (mark < PASS_MARK) li.classList.add("is-failing");

    const label = document.createElement("span");
    label.textContent = `Marks in ${subject.label}`;

    const value = document.createElement("span");
    value.textContent = String(mark);

    li.append(label, value);
    marksList.appendChild(li);
  });

  document.getElementById("report-total").textContent = String(total);
  document.getElementById("report-percentage").textContent = percentage.toFixed(2);

  const gradeEl = document.getElementById("report-grade");
  gradeEl.textContent = grade;

  const resultEl = document.getElementById("report-result");
  resultEl.textContent = result;
  resultEl.classList.remove("pass", "fail");
  resultEl.classList.add(result === "PASS" ? "pass" : "fail");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const marks = {};

  SUBJECTS.forEach((subject) => {
    marks[subject.key] = parseMark(form[subject.key].value);
  });

  const error = validateForm(name, marks);
  if (error) {
    formError.textContent = error;
    formError.hidden = false;
    return;
  }

  formError.hidden = true;

  const markValues = SUBJECTS.map((s) => marks[s.key]);
  const total = markValues.reduce((sum, m) => sum + m, 0);
  const percentage = total / 5;
  const grade = getGrade(percentage);
  const result = getResult(markValues);

  renderReportCard({ name, marks, total, percentage, grade, result });

  reportSection.hidden = false;
  reportSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

resetBtn.addEventListener("click", () => {
  form.reset();
  formError.hidden = true;
  reportSection.hidden = true;
  form.name.focus();
});
