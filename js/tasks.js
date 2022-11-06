//......................... ЗАДАЧА--1........................
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const cenOpenChat = isOnline && isFriend && !isDnd;
// console.log('Я відкриб чат', cenOpenChat);
//
//
//......................... ЗАДАЧА--2........................
// const sub = 'pro';
// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Є доступ', sub);
//
//
//......................... ЗАДАЧА--3........................
// Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//     total += i;
//   }
// }
// console.log(total);
//
//
//......................... ЗАДАЧА--4........................//
// Используя конструкцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const questtion = prompt('Какое официальное название JavaScript?');
// console.log(questtion);

// if (questtion == 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }
//
//
//......................... ЗАДАЧА--5........................//
// let balance = 5000;
// const payment = 200;

// console.log(
//   `Загальна кількість заказу ${payment}. Провірте рівень балансу на рахунку:`,
// );

// if (payment <= balance) {
//   balance -= payment;
//   console.log('Все добре знімаєм гроші. Дякуємо за покупку');
//   console.log(`На рахунку залишилоси ${balance}`);
// } else {
//   console.log('На рахунку недостаточно коштів');
// }
// console.log('Операція завершена');

//
//
//......................... ЗАДАЧА--6  з циклами ........................//
// 1 - Зробити вари
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;
// // 2 - Перерахувати робочих
// for (let i = 1; i <= employees; i += 1) {
//   // 3 - Згенерувати випадкову зарплату
//   const salary = Math.round(Math.random() * maxSalary - minSalary) + minSalary;
//   console.log(`Зарплата робочого номер ${i} - ${salary}`);
//   // 4 - Прибавити до тотала
//   totalSalary += salary;
// }
// //  5 - Лог
// console.log('totalSalary', totalSalary);
//
//
//......................... ЗАДАЧА--7  з циклами ........................//
//  1 - Зробити вари
// const min = 6;
// const max = 13;
// let total = 0;

// //  2 - for від мін до макс, з шагом 1
// for (let i = min; i <= max; i += 1) {
//   //................. метод - 2...........//
//   if (i % 2 !== 0) {
//     console.log('Не парне число: -', i);
//     continue;
//   }
//   console.log('Парне число: ', i);
//   total += i;
//   //.................. метод - 1 ..............//
//   //   console.log(i);

//   //  3 - Провіряєм залишок від ділення
//   //   if (i % 2 === 0) {
//   //     console.log('Парне число: ', i);

//   //     //  3 - Пишем суму
//   //     total += i;
//   //   }
// }

// console.log('total: ', total);
//
//
//......................... ЗАДАЧА--7 ........................//
// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовий партнер, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Срібний партнер, скидка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('Золотий партнер 10%');
//   discount = 0.1;
// } else {
//   console.log('Не партнер скидка 0%');
// }

// payment -= payment * discount;

// console.log(`Оформляєм заказ на суму ${payment} зі знижков ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Загальна сума потрачена в иагазині ${totalSpent}`);
//
//
//......................... ЗАДАЧА--8 ........................//
//Создайте массив styles с элементами «Джаз» и «Блюз».
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз'];

// //Добавьте «Рок-н-ролл» в конец.
// styles.push('Рок-н-ролл');
// console.log(styles);

// //Замените значение «Блюз» на «Классика».
// styles[1] = 'Классика';
// console.log(styles);

// //Удалите первый элемент массива и выведите его в консоль.
// console.log(styles.shift());

// //Вставьте «Рэп» и «Регги» в начало массива.
// styles.unshift('Рэп', 'Регги');
// console.log(styles);
//
//
//......................... ЗАДАЧА--9 ........................//
//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.
// function ncaculculateAverageame(...arg) {
//   let sum = 0;
//   let count = arg.length;

//   for (const argument of arg) {
//     if (isNaN(argument)) {
//       count -= 1;
//       continue;
//     }

//     sum += argument;
//   }
//   return sum / count;
// }

// console.log(ncaculculateAverageame(1, 2, 3, 5, 'Nan', 'qwe'));
//
//

// function caculculateAverage(...args) {
//   let total = 0;
//   let sum = args.length;
//   for (let i = 0; i < args.length; i += 1) {
//     if (isNaN(args[i])) {
//       sum -= 1;
//       continue;
//     }
//     total += args[i];
//   }
//   return total / sum;
// }
// console.log(caculculateAverage(1, 2, 3, 5, 'nan', 'sdlgns'));
//
//
//
//......................... ЗАДАЧА--10 ........................//

//Создайте объект calculator с тремя методами
// const calculator = {
//   a: 1,
//   b: 2,
// /read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//sum() возвращает сумму сохраненных значений
//   sum() {
//     return this.a + this.b;
//   },
//mult() перемножает сохраненные значения и возвращает результат
//   mult() {
//     return this.a * this.b;
//   },
// };
// // console.log(calculator);

// calculator.read(5, 6);
// console.log(calculator.sum());
// console.log(calculator.mult());
//
//
//......................... ЗАДАЧА--11 ........................//

// Напиши скрипт, который для объекта user,
// последовательно:
// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };
// // 1 добавит поле mood со значением 'happy'
// user.mood = 'happy';
// // console.log(user);

// //2 заменит hobby на 'skydiving'
// user.hobby = 'skydiving';
// // console.log(user);

// // 3 заменит значение premium на false
// user.premium = false;
// // console.log(user);

// //4 выводит содержимое объекта users в фортмате
// //ключ:значение используя Object.keys() и for...of
// for (const key in user) {
//   //   Object.keys(`${key}: ${user[key]}`);
//   console.log(`${key}: ${user[key]}`);
// }

//......................... ЗАДАЧА--12 ........................//
// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mod = 'heppi';
// // console.log(user);

// user.hobby = 'skydiving';
// // console.log(user);

// user.premium = Boolean[0]; // false
// // console.log(user);

// const keys = Object.keys(user);
// const values = Object.values(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// console.log(user);
// console.log(keys);
// console.log(values);
//
//
//
//
// /......................... ЗАДАЧА--13 ......................../
// 1. Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
// через prompt и вызывает callback функцию
// greet(name) - коллбек принимающий имя и логирующий в консоль
// строку "Привет <name>"
// Реализуй проверку, что prompt не пустой

// function letMeSeeYourName(callback) {
//   const name = prompt('Введіть імя');
//   if (!name) return;
//   callback(name);
// }

// const greet = name => {
//   console.log(`Привіт все вірно ${name}`);
// };

// letMeSeeYourName(greet);

//
//
//
//......................... ЗАДАЧА--14........................//
// 4. Исправьте ошибки, чтобы код работал
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(product.price);
//   },
// };
// product.showPrice();
//
//
//
//
//......................... ЗАДАЧА--15........................//
//Напишите скрипт который заменяет регистр каждого символа
//в стороке на противоположный
//Например 'JavaScript' должен вернуть 'jAVAsCRIPT'
//
//
//
//

//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';
//const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']
//
//
//
//
//
//2. Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль
//
//
//
//

//6. Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2
//
//
//
//
//7. Напишите функцию makeCounter, которая возвращает другую
//функцию, которая считает и логирует количество своих вызовов
//
//
//
//
////8. Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает
