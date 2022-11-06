'use strict';
//................ this -  this - this  .................
// function sayHello() {
//   //Не залежна функція
//   console.log(this);
// }

// const obj = {
//   name: 'Baddy',
//   age: 15,

//   hello() {
//     // Власна функція
//     console.log(this);
//   },

//   innerFn: sayHello,
// };
// // obj.innerFn();
// // obj.hello();

// // const fn = obj.sayHello; // Втрата контекіту
// // fn(); // Буде undefined

// // setTimeout(() => {
// //   console.log('Появилась через 2с.');
// // }, 2000);

// setTimeout(() => {
//   // Збереження контексту
//   obj.hello();
// }, 2000);
//
//
// const fn = () => {
//   console.log(this);
// };

// const obj = {
//   name: 'Rostik',
//   age: 30,

//   sayHello(name) {
//     console.log(this);
//     console.log(`Hello ${name}`);
//   },
// };
// -------------------------
// obj.sayHello();
// -------------------------

//
//
// const fn = obj.sayHello;
// // fn.call(obj);
// fn.apply(obj);

// const fn = obj.sayHello.bind(obj);
// setTimeout(obj.sayHello.bind(obj), 2000);

//
//   ------- ВЛАСНИЙ  bind -------
// function bind(callback, context) {
//   return function (...args) {
//     callback.call(context, args);
//   };
// }

// const fn = bind(obj.sayHello, obj);
// fn('Rostik');

//
//
//
//
//  --------------  ЗАДАЧІ  ----------------
//  --------------  ЗАДАЧА  1 виведення загальної суми  ----------------
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Rudy', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(StoneName) {
//     const { price, quantity } = this.stones.find(
//       item => item.name === StoneName,
//     );

//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Rudy'));
//
//
//
//  --------------  ЗАДАЧА  2 канкулятор  ----------------
// read(a, b) - принимає 2 значення і зберігає їх як властивість обєкта
// add() - Повертає суму збережених значень
// mult() - Помножит збережені значення і повертає результат

// const calculator = {
//   a: 0,
//   b: 0,

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(5, 7);

// console.log(calculator);
// console.log(calculator.add()); // 12
// console.log(calculator.mult()); // 35

//
//
//................ Кінеть  -  this - this  .................
//
//
//
//

// const users = {
//   tag: 'Rostik',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };
// users.showTag();

// const showTag = function () {
//   console.log('showTag -> this:', this);
//   console.log('showTag -> this.tag:', this.tag);
// };

// const users = {
//   tag: 'Tany',

// };

// users.showUserTag = showTag;
// console.log('users', users);

// users.showUserTag();

// const users = {
//   tag: 'Tany',
//   showTag() {
//     console.log('showTag -> this:', this);
//     console.log('showTag -> this.tag:', this.tag);
//   },
// };

// users.showTag();

// const outerShowTag = users.showTag;
// // outerShowTag();

// // users.showTag();

// const objC = {
//   c: 10,
// };
// // console.log(objC);

// const objB = Object.create(objC);
// objB.b = 5;
// // console.log(objB);

// // console.log(objB.y);
// // console.log(objB.z);

// const objA = Object.create(objB);
// objA.a = 3;
// console.log(objA.hasOwnProperty('c'));

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   this.changePrice = function (nawPrice) {
//     this.price = nawPrice;
//   };
// };

// const myCar1 = new Car({
//   brand: 'Audi',
//   model: 'q6',
//   price: 45000,
// });
// console.log(myCar1);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'x8',
//   price: 55000,
// });
// console.log(myCar2);

// ...................................................... //
// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);

//   this._bindEvents();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector('[data-increment]');
//   refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//   refs.value = refs.container.querySelector('[data-value]');

//   return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
//     console.log('CounterPlugin.prototype._bindEvents -> this', this);
//     this.increment();
//     this.updateValueUI();
//   });

//   this._refs.decrementBtn.addEventListener('click', () => {
//     console.log('CounterPlugin.prototype._bindEvents -> this', this);
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// new CounterPlugin({ rootSelector: '#counter-1', step: 1 });

// new CounterPlugin({ rootSelector: '#counter-2', step: 1 });
// ...................................................... //
//
//
//
//
//
// ...................................................... //
// ПОПОВНЕНЯ БАЛАНСУ ТА ЗНЯТТЯ КОШТІВ  спосіб інкапсулятії
// class Account {
//   #balance;

//   constructor(balance) {
//     //Тут ставится додаткова перевірка
//     this.#balance = balance;
//   }

//   get balance() {
//     //Тут ставится додаткова перевірка
//     return this.#balance;
//   }

//   set balance(amount) {
//     this.#balance = amount;
//   }

//   //Функції get і set
//   getBalance() {
//     return this.#balance;
//   }

//   setBalance(amount) {
//     this.#balance = amount;
//   }
//Функції get і set кінеть

//   withdraw(amount) {
//     //Видача готівки
//     if (amount <= this.#balance) {
//       this.#balance -= amount;
//     } else {
//       console.log('Не достатньо коштів на рахунку');
//     }
//   }

//   deposit(amount) {
//     //Поповнення
//     this.#balance += amount;
//   }
// }
// const account1 = new Account(100);
// console.log(account1);

// account1.deposit(150);
// console.log(account1);

// account1.withdraw(350);

// account1.balance = 15000;
// console.log(account1);

// account1.setBalance(500); // Звернення до fan... setBalance
// console.log(account1);

// account1.balance = 600;
// console.log(account1);

//
//
//
// ...................................................... //
// .......  Другі методи та приклади стосовно this .......
// class Human {
//   constructor({ name, age, items }) {
//     this.name = name;
//     this.age = age;
//     this.items = items;
//   }

//   sayHello() {
//     console.log(`hello, my name is ${this.name}`);
//   }
// }

// class Doctor extends Human {
//   constructor({ experience = 0, ...rest }) {
//     super({ ...rest });
//     this.experience = experience;
//   }

//   healing() {
//     console.log('Icen heal');
//   }
// }

// const boddy = new Human({ name: 'Boddy', age: 15, items: 2 });
// const house = new Doctor({ name: 'House', age: 45, items: 5, experience: 20 });

// console.log(boddy);
// console.log(house);

//
//
// .......  Другі методи та приклади стосовно this .......
// .......  ДОДАІАННЯ ТА ІИДАЛЕННЯ  ..............
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

// Видалення обєкта через Filter
//   removeItem(value) {
//     this.items = this.items.filter(item => item !== value);
//   }
// }

// const storage = new Storage(['Rostik', 'Tanyy', 'Nazar']);

// const items = storage.getItems();
// console.log(items);

// storage.addItem('Vasy');
// console.log(storage.items);

// storage.removeItem('Nazar');
// console.log(storage.items);

//
//
// .......  Другі методи та приклади стосовно this .......
// .......  ІНВЕРСІЯ true або false  ..............
// class Toggle {
//   constructor({ on = false } = {}) {
//     this.on = on;
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ on: true });

// console.log(firstToggle.on);

// firstToggle.toggle();
// console.log(firstToggle.on);

// firstToggle.toggle();
// console.log(firstToggle.on);

// firstToggle.toggle();
// console.log(firstToggle.on);

// firstToggle.toggle();
// console.log(firstToggle.on);

// firstToggle.toggle();
// console.log(firstToggle.on);
