// ..................Масиви;
// const clients = ['Mango', 'Poly', 'Ajax', 'Mango', 'Poly', 'Ajax'];
// console.log(clients[1]); // Mango

// clients[0] = 'hey';
// console.log(clients.length - 1);

// const clients = ['Mango', 'Poly', 'Ajax'];
// const lastElementIndex = clients.length - 1;
// // console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

//.....................Ітерація по масиву
// const clients = ['Rostik', 'Naxar', 'Tanyy'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ['Mango', 'Ajax', 'Poly', 'Rostik', 'Naxar', 'Tanyy'];

// for (const client of clients) {
//   console.log(clients);
// }

// const string = 'javascript';

// for (const strings of string) {
//   console.log(strings);
// }

// const clients = ['Rostik', 'Naxar', 'Tanyy'];
// const clientNameToFine = 'Naxar';
// let message;

// for (const client of clients) {
//   if (client === clientNameToFine) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${numbers[i]}`);
//   console.log(numbers[i]);
// }

//............ Присвоєння за посиланням і за значенням
// let a = 25;
// let b = a;
// console.log(a);
// console.log(b);

// a = 15;
// console.log(b);

// const a = ['Mango'];
// const b = a;
// console.log(a); // ["Mango"]
// console.log('Mango'); // ["Mango"]

// a.push('Rostik');
// console.log(a);
// console.log(b);
// b.push('Nazar');
// console.log(a);

//.......................... Методи масиву
// const name = 'Mango';
// console.log(name.split(''));

// const message = 'JavaScript - це цікаво';
// console.log(message.split(' '));

// const words = ['JavaScript', 'це', 'цікаво'];
// console.log(words.join('')); // "JavaScriptцецікаво"
// console.log(words.join(' ')); // "JavaScript це цікаво"
// console.log(words.join(' - ')); // "JavaScript-це-цікаво"

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Kiwi')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

// const fruit = 'cherry';
// const resultFruit = redFruits.includes(fruit);

// if (resultFruit) {
//   console.log(`${fruit} це червоний плід!`);
// }

// const numbers = [];
// numbers.push('tanyy');
// console.log(numbers);

// numbers.push(2);
// console.log(numbers);

// numbers.push('rostik');
// console.log(numbers);

// numbers.push(3);
// console.log('nazar');

// numbers.push(4);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice());

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(scores);

// const deletedScores = scores.splice(0, 3);
// console.log(scores);

// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purple', 'nazar');
// console.log(colors);

// const languages = ['C', 'C++', 'Java', 'JavaScript'];

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, 'Python');
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

//....................... Функції;
// 1. Оголошення функції multiply
// function multiply() {
//   // Тіло функції
//   console.log('Це лог на момент виклику функції multiply');
// }

// multiply();

// function multiply(x, y, z) {
//   const numbers = 45 * 57 * 91;
//   console.log(`Результат множення дорівнює ${numbers}`);
// }
// multiply();

// 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550

// function multiply(a, b, c) {
//   console.log('Код до return виконується звичайним чином');
// }

// function multiply(x, y, z) {
//   console.log('Код до return виконується звичайним чином');

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log('Цей лог ніколи не виконається, він стоїть після return');
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// function count(countFrom = 0, countTo = 10, step = 2) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i < countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 6);
// count(3);
// count();

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3));
// console.log(multiply(1, 2, 3, 4));
// console.log(multiply(1, 2, 3, 4, 5));
