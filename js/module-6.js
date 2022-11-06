// import productsArray from '../js/export.js';
// console.log(productsArray);
//

// const magicBtn = document.querySelector('.js-magic-btn');
// //
// //
// const currentPageUrl = '/about';

// const linkEl = document.querySelector(
//   `.site-nav__link[href='${currentPageUrl}']`,
// );

// console.log(linkEl);
// linkEl.classList.add('site-nav__link--current');
//
//
//  -------------------------------------------- //
// const navEl = document.querySelector('.site-nav');

// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);
// console.log(navEl.children);
// console.log(navEl.lastElementChild);

//
//
//  -------------------------------------------- //
// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Додавання заголовка через js :)';

// // console.log(titleEl);

// const imgEl = document.createElement('img');
// imgEl.src = '../img/img-gallery-d 1.jpg';
// imgEl.alt = 'Фото';
// imgEl.width = 640;
// // console.log(imgEl);
// document.body.prepend(titleEl, imgEl);

// //
// //
// //  -------------------------------------------- //
// const navitemEl = document.createElement('li');
// navitemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Особистий кабінет';
// navLinkEl.href = '/profile';

// navitemEl.append(navLinkEl);
// console.log(navitemEl);

// const navEl = document.querySelector('.site-nav');
// // navEl.appendChild(navitemEl);
// navEl.insertBefore(navitemEl, navEl.firstElementChild);
// navEl.insertBefore(navitemEl, navEl.lastElementChild);
// navEl.insertBefore(navitemEl, navEl.children[2]);

//
//
//  ------------------- Створення Колекцій ----------------- //
// const colorPicker = [
//   { label: 'red', color: '#f44336' },
//   { label: 'green', color: '#4caf50' },
//   { label: 'blue', color: '#2196f3' },
//   { label: 'grey', color: '#60708b' },
//   { label: 'pink', color: '#e91e63' },
//   { label: 'indigo', color: '#3f5185' },
// ];

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const makeColorPikker = options => {
//   return options.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   });
// };

// // console.log(elements);
// const elements = makeColorPikker(colorPicker);
// colorPickerContainerEl.append(...elements);

//
//
//  ------------------- Створення карточки ----------------- //
// const product = {
//   name: 'Сервопривід',
//   description:
//     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem possimus atque aspernatur rerum consectetur in consequuntur officiis laboriosam enim eveniet.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };
//
// const productsContainerEl = document.querySelector('.js-products');

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const nameEl = document.createElement('h2');
//   nameEl.textContent = name;
//   nameEl.classList.add('product__name');

//   const descrEl = document.createElement('p');
//   descrEl.textContent = description;
//   descrEl.classList.add('product__descr');

//   const priceEl = document.createElement('p');
//   priceEl.textContent = `Ціна: ${price} кредитів`;
//   priceEl.classList.add('product__price');

//   productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// console.log(makeProductCard(productsArray[3]));

// // Створення копій карточок
// const elements = productsArray.map(makeProductCard);
// productsContainerEl.append(...elements);
// console.log(elements);

//
//
// ------------------------ Створення  елементів -------------------------
// const jsSiteNavContainer = document.querySelector('.js-site-nav__container');

// const heading = document.createElement('h2');
// console.log(heading);

// heading.textContent = 'This is a heading';
// console.log(heading);

// // const image = document.createElement('img');
// // image.src = 'https://placeimg.com/640/480/nature';
// // image.alt = 'Nature';
// // image.width = 400;
// // console.log(image);

// // ------------------------ Додавання  елементів -------------------------
// jsSiteNavContainer.append(heading);

// ------------------------ Видалення  елементів -------------------------
// image.remove();

//
//
//
// ----------------- Властивість innerHTML ------------------
//  --------------- Читання ------------------
// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);

//  --------------- Додавання ----------------------------
// const article = document.querySelector('.js-inner-html');
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// article.innerHTML = htmlString;

// //  --------------- Зміна ----------------------------
// article.innerHTML = 'New and <span class="accent">improved</span> title';

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join('');

// console.log(markup);

// list.innerHTML = markup;

// // // ------------------------ Видалення -------------------------
// article.innerHTML = '';
// list.innerHTML = '';

//
//
//
// ---------------- Метод insertAdjacentHTML() ---------------
// const list = document.querySelector('.list');

// const newTechnologies = ['React', 'TypeScript', 'Node.js'];
// const markup = newTechnologies
//   .map(technology => `<li class="list-item new">${technology}</li>`)
//   .join('');

// list.insertAdjacentHTML('afterbegin', markup);
// list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');
