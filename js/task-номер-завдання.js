// Завдання 1
class Account {
  constructor({ login, email }) {
    this._login = login;
    this._email = email;
  }
  getInfo() {
    return `Login: ${this._login}, Email: ${this._email}`;
  }
}

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

console.log(mango.getInfo());

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.getInfo());

// Завдання 2

class User {
  constructor({ name, age, followers }) {
    this._name = name;
    this._age = age;
    this._followers = followers;
  }
  getInfo() {
    return `User ${this._name} is ${this._age} years and has ${this._followers} followers`;
  }
}

const mangoInfo = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

console.log(mangoInfo.getInfo());

const polyInfo = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

console.log(polyInfo.getInfo());

// Завдання 3

class Storage {
  constructor(storage) {
    this._storage = storage;
  }
  getItems() {
    return storage;
  }
  addItem(item) {
    return this._storage.push(item);
  }
  removeItem(item) {
    return this._storage.splice(1, 1);
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроїд");
console.table(storage);

storage.removeItem("Пролонгер");
console.table(storage);

// Завдання 4

class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  append(str) {
    return (this._value = this._value += str);
  }
  prepend(str) {
    return (this._value = str += this._value);
  }
  pad(str) {
    return (this._value = str += this._value + str);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder); // '.^'

builder.prepend("^");
console.log(builder); // '^.^'

builder.pad("=");
console.log(builder); // '=^.^='

class Car {
  constructor({ speed, maxSpeed, isOn, distance, price }) {
    this._speed = speed;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._price = price;
    this._distance = distance;
  }
  turnOn() {
    return (this._isOn = true);
  }

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    return ((this._isOn = false), (this._speed = 0));
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    return value + this._distance;
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    return value + this._distance;
  }
  drive(hours) {
    return hours * this._distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
