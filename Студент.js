const student = {
  name: "Vlad",
  age: 32,
  university: "Satnford",
  major: "3 stage",
};
const printStudentInfo = ({name, age, university, major}) => {
  console.log(`${name} - ${age} - ${university} - ${major}`);
};
printStudentInfo(student);

