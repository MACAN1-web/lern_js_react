const library = [
  ["King", "Artur", 1980],
  ["Mamba", "Kobe", 1923],
  ["Kingkong", "Vlad", 1983],
];
console.log(library)

for (let i = 0; i < library.length; i++) {
  console.log(`названием книги ${library[i][0]} - именем автора ${library[i][1]} -
         годом издания ${library[i][2]}`);
}