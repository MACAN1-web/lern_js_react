const users = [
  { name: "Alice", age: 30, country: "USA" },
  { name: "Bob", age: 25, country: "Canada" },
  { name: "Charlie", age: 35, country: "UK" },
  { name: "Diana", age: 40, country: "USA" },
  { name: "Eva", age: 22, country: "Canada" },
];
const person1 = users
  .filter((curr) => curr.age > 32)
  .filter((curr) => curr.country === "USA");
console.log(person1);

const person2 = users.filter((curr) => curr.age > 22).toSorted((a, b) => a - b);
console.log(person2);

