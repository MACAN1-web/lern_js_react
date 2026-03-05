const car = {
  brand: "",
  model: "",
  year: 0,
  displayInfo() {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год: ${this.year}`);
  },
};

const Camry = Object.create(car);
Camry.brand = "Toyota";
Camry.model = "Camry";
Camry.year = 2020;

const Mustang = Object.create(car);
Mustang.brand = "Ford";
Mustang.model = "Mustang";
Mustang.year = 2018;

Camry.displayInfo();
Mustang.displayInfo();

let text = promt ('Сколько тебе лет?', 23)
alert (`тебе ${text}`)
