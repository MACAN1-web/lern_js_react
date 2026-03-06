const students = [
  { name: "Алиса", subjects: ["JavaScript", "Python"] },
  { name: "Боб", subjects: ["Java", "C++"] },
  { name: "Чарли", subjects: ["HTML", "CSS"] },
];

const studentName = students.find(
  (person) => person.name === "Алиса" && person.subjects.includes('JavaScript'),
);
const studentName1 = students.find(
  (person) => person.name === "Чарли" && person.subjects.includes('HTML'),
);
console.log(studentName);
console.log(studentName1);

