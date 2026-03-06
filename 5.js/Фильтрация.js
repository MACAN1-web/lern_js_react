const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
  { id: 4, name: "David", isActive: false },
  { id: 5, name: "Eve", isActive: true },
];

const Active = users.filter(function (act) {
  return act.isActive === true;
});

console.log(Active)