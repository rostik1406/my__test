// ............................Синтаксис spread і rest
// const temps = [14, -4, 25, 8, 11];
// console.log(Math.max(...temps));
// console.log(...temps);

// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// const copiOfTemps = [...temps];
// console.log(copiOfTemps);

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// ........................створення нового об'єкта
// const first = {
//   propA: 5,
//   propB: 10,
// };
// const second = { propC: 15 };

// const third = { ...first, ...second };
// console.log(third);

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// ...................збирання всіх аргументів функції
// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 'Rostik');
// multiply(1, 2, 'Tanyy');
// multiply(1, 2, 3, 'Nazar');

// .............rest: збирання частини аргументів функції
// function multiply(firstNumber, secondNumber, ...outherArgs) {
//   console.log(firstNumber);
//   console.log(secondNumber);
//   console.log(outherArgs);
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
//

//.....................Деструктуризація об'єктів
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 9.38,
// };

// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage);

// const accessType = isPublic ? 'публічному' : 'закритому';
// const message = `Книга ${title} футор ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі`;
// console.log(message);

// ..................Значення за замовчуванням
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
// };

// book.coverImage = 'https://via.placeholder.com/640/480';
// console.log(book);

// const {
//   title,
//   coverImage = 'https://via.placeholder.com/640/480',
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage);
//

// ..................Зміна імені змінної
// const firstBook = {
//   title: 'The Last Kingdom',
//   coverImage:
//     'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: 'Сон смішної людини',
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480
//

//..................Деструктуризація в циклах
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
// ];

// // for (const book of books) {
// //   console.log(book.title);
// //   console.log(book.author);
// //   console.log(book.rating);
// // }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
//

//....................Глибока деструктуризація
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ////////////////////Деструктуризація масивів
// const rgb = [200, 255, 100];
// const [red, green, blue, alfa = 0.3] = rgb;
// console.log(`R:${red}, G:${blue}, B:${blue}, Alfa:${alfa}`);

// const rgb = [200, 255, 100];
// const [red, ...colors] = rgb;
// console.log(red);
// console.log(colors);
//

//................Патерн «Об'єкт параметрів»
// ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }
