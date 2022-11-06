// .......................РОЗПИЛЕННЯ ОБЄКЦІВБ МАСИВІВ..............
// const nambers = [1, 2, 3].concat([1, 5, 3], [7, 8, 2, 10]);

// const nambers = [
//   0,
//   0,
//   0,
//   ...[1, 2, 3],
//   'Speed potion',
//   'Dragon breath',
//   'Stone skin',
// ];
// console.log(nambers);

// const nambers = [15, 17, 58, 65, 48, 95, 45, 88];
// console.log(Math.max(...nambers));

// const a = { x: 1, y: 2 };
// const b = { x: 17, z: 24 };

// const c = {
//   x: 10,
//   y: 20,
//   z: 3,
//   ...b,
//   ...a,
// };

// console.log(c);

// const defaultSettings = {
//   theme: 'light',
//   showNotification: true,
//   hogeSidebar: false,
// };
// console.log(defaultSettings);

// const userSettings = {
//   showNotification: 'One',
//   higeSidebar: 'seconderri',
// };
// console.log(userSettings);

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };
// console.log(finalSettings);

//...................РОЗПАКОВУВАННЯ ОБЄКЦІВ, МАСИВІВ.............
//....................ДЕСТРУКТОРІЗАЦІЯ...........................
// const playList = {
//   name: 'My list',
//   rating: 7,
//   tracks: ['trak-1', 'trek-2', 'trek-3'],
//   trackCount: 3,
//   //   author: 'Nazar',
//   stats: {
//     followers: 5624,
//     vievs: 5872,
//     likes: 1309,
//     a: {
//       b: 1,
//       c: 65,
//       d: 8,
//     },
//   },
// };

// const {
//   name,
//   rating,
//   tracks,
//   trackCount: namberOfTrek = 0,
//   author = 'Rostik',
//   stats: { followers, vievs, likes, a },
// } = playList;

// // const { followers, vievs, likes } = stats;
// // console.log(followers, vievs, likes);

// console.log(
//   name,
//   rating,
//   tracks,
//   namberOfTrek,
//   author,
//   followers,
//   vievs,
//   likes,
//   a,
// );
// // console.log(namberOfTrek);
// //
// playList.title = 'Hay';
// console.log(playList);
// ................................................

// const rgb = [255, 100, 50];
// const [red, , blue] = rgb;
// console.log(red, blue);

// .............................................................
// const author = {
//   kiwi: 4,
//   poli: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(author);
// for (const [name, rating] of entries) {
//   //   const [name, rating] = entry;

//   console.log(name, rating);
// }

// ..............REST ЗБІР ЕЛЕМЕНТІВ............................
// const profile = {
//   name: 'Rostik Matkovskiy',
//   tag: 'jgluke',
//   avatar: 'https://www.edu.goit.global/uk/learn/4009756/2294/2297/extras',
//   stats: {
//     followers: 8529,
//     views: 75336,
//     likes: 354712,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);
// ..............................................................

// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     avatar,
//     stats: { followers, views, ...restProps },
//   } = userProfile;

//   console.log(name, tag, avatar, followers, views);
//   console.log(restProps);
// };

// const profile = {
//   name: 'Rostik Matkovskiy',
//   tag: 'jgluke',
//   avatar: 'https://www.edu.goit.global/uk',
//   stats: {
//     followers: 8529,
//     views: 75336,
//     likes: 354712,
//   },
// };
// showProfileInfo(profile);

//
// ........................МЕТОДИ ВАЖНО .........................
//
// const cart = {
//   items: [],
//   getItems() {
//     return this.items; //повертає весь обєкт
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct); //Додає елементи в кінеть масива
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         console.log('Найшли такай продукт', productName);
//         console.log('Індекс елемента:', i);

//         items.splice(i, 1);
//       }
//     }

//     // for (const item of this.items) {
//     //   console.log(item, 'Переберає items');

//     //   if (productName === item.name) {
//     //     console.log('Найшли такай продукт', productName);
//     //   }
//     // }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increasQantity(productName) {},
//   decreaseQantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'peach', price: 60 });
// cart.add({ name: 'peach', price: 60 });
// cart.add({ name: 'peach', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberri', price: 110 });
// cart.add({ name: 'strawberri', price: 110 });
// cart.add({ name: 'strawberri', price: 110 });
// cart.add({ name: 'strawberri', price: 110 });

// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice());

// cart.remove('lemon');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log('Total:', cart.countTotalPrice());
