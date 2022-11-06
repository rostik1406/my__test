// const a = 'JavaScript is awesome'.toUpperCase();
// const b = 'JavaScript is awesome'.length;

// console.log(a, b);

// let age;

// age = 27;

// age = 47;
// console.log(age);

// // let userName;
// // console.log(userName);

// let inputValue = null;
// console.log(typeof inputValue);

// const quentity = 30;
// console.log(typeof quentity);

// // const message = 'JavaScript is awesome!';
// // console.log(typeof message);

// const isSidebarOpen = true;
// console.log(typeof isSidebarOpen);

// const message = 'JavaScript is awesome!'.toLocaleUpperCase();
// console.log(message);

// const userName = 'Rostik';
// console.log('Username is ', userName);

// const message = 'JavaScript is awesome!';
// alert(message);

// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// const hotelName = prompt('Please enter desired hotel name');
// console.log(hotelName);

// const value = prompt('Please enter a number!');
// console.log(typeof value);

// const a = 85;
// const b = 75;
// let c = 10;

// console.log(a !== b);

// const x = 5;
// const y = 10;
// const z = 5;

// console.log('x > y:', x > y); // false
// console.log('x < y:', x < y); // true
// console.log('x < z:', x < z); // false
// console.log('x <= z:', x <= z); // true
// console.log('x === y:', x === y); // false
// console.log('x === z:', x === z); // true
// console.log('x !== y:', x !== y); // true
// console.log('x !== z:', x !== z); // false

// const valueA = '10';
// console.log(Number(valueA));
// console.log(typeof Number(valueA));

// const valueB = 'random string';
// console.log(Number(valueB));
// console.log(typeof Number(valueB));

// const name = ' 20 Rostik 30';
// console.log(Number.parseInt(name));

// let sum = '45.749 qweqwe 73';

// sum = '26.825vfesvf vfs2685v';
// console.log(Number.parseFloat(sum));

// const validNumber = Number('uhyjumi');
// console.log(Number.isNaN(validNumber));

// const invalidNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// const a = 0.17;
// const b = 0.24;
// console.log((a + b).toFixed(2));

// const numbers = 1544.65;
// console.log(Math.min(15, 32, 5, 541414, 65, 4, 48, 894));
// console.log(Math.max(15, 32, 5, 514, 65, 4, 48, 894));

// const r = 'Rostik ';
// const n = 'Nazar ';
// const t = 'Tany';

// const title = r + n + t;
// console.log(title);

// console.log(15 + title + 75);

// const name = 'Rostik';
// const names = 'Matkovskiy';
// const age = 30;
// const growth = 182;
// const weight = 70;

// const result = `name: ${name}
// names: ${names}
// age: ${age}
// growth: ${growth}
// weight: ${weight} `;

// console.log(result);

// const message = 'Welcome to Bahamas!';
// console.log(message.toLowerCase());

// const BRAND_NAME = 'SAMSUNG';
// const userInput = 'saMsuNg';
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput);
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput);
// console.log(normalizedToUpperCaseInput === BRAND_NAME);

// const message = 'Welcome to Bahamas!';
// console.log(message.indexOf('s'));

// const productName = 'Ремонтний дроїд';
// console.log(productName.includes('Е'));

// const jsFileName = 'script.js';
// console.log(jsFileName.endsWith('s'));

// const name = 'Rostik Matkovskiy';
// console.log(name.slice(2, 9));

// console.log(name.slice(7, name.length));
// console.log(name.slice());

// const age = 30;
// const ages = 20;
// console.log(age < ages && age > ages);

// console.log(5 && 5);
// console.log('' && 'Mango');
// console.log('Mango' && '');
// console.log('Mango' && 'Poly');
// console.log('Poly' && 'Mango');

// const numbers = 5;
// console.log(numbers > 10 || numbers < 30);

// const name = 'Rostik';
// console.log(!'Rostik');
// const isOnline = false;
// const isNotOnline = !isOnline;
// console.log(isNotOnline);
// let cost;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   cost = 100;
// }

// console.log(cost);
// cost = 25;
// let result;
// const subscription = 'RostikM';
// if (subscription === 'Rostik') {
//   result = 30;
// } else {
//   result = 'subscription не дорівнює RostikM';
// }

// console.log(result);

// let result;
// const name = 'Rostik';
// if (name === 'Rostik') {
//   result = 30;
// } else if (name === 'Rostiks') {
//   result = 40;
// } else if (name === 'Rostik') {
//   result = 50;
// } else {
//   console.log('Недійсний тип підписки');
// }

// console.log(result);

// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // "adult"
// const age = 30;
// const type = age <= 18 ? 'Nazar' : 'Rostik';
// console.log(type);

// const n1 = 10;
// const n2 = 20;
// let result;

// if (n1 < n2) {
//   result = n1;
// } else {
//   result = n2;
// }
// console.log(result);

// const n1 = 75;
// const n2 = 98;
// let result = n1 < n2 ? n1 : n2;
// console.log(result);

// let result;
// const subscription = 'Premium';

// switch (subscription) {
//   case 'free':
//     result = 15;
//     break;

//   case 'Premium':
//     result = 24;
//     break;

//   case 'Premium':
//     result = 59;
//     break;

//   default:
//     console.log('Недійсний тип підписки');
// }

// console.log(result);

// if (true) {
//   const value = 5;
//   console.log('Block scope: ', value); // 5
// }

// console.log('Global scope: ', value);

// let counter = 1;

// while (counter <= 10) {
//   console.log('counter:', counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log('Вільні номири: ', clientCounter);
//   clientCounter += 1;
// }

// let password = '';

// do {
//   password = prompt('Введіть пароль довший 4-х символів', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const nambers = 5;

// for (let i = 0; i <= nambers; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Знайшли число 3, перериваємо виконання циклу');
//     break;
//   }
// }

// console.log('Лог після циклу');

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
// }
