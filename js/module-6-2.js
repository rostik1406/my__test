// ------------------- Події -----------------------
// ----------- Метод addEventListener() ------------
const magic = document.querySelector('.js-magic-btn');
// console.log(magic);

// const handleClick = () => {
//   console.log('Відбувся клік по кнопці Створити магію');
// };

// magic.addEventListener('click', handleClick);

//
// --------------- Метод removeEventListener() -------------
// magic.addEventListener('click', () => {
//   magic.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });

//
// -------------- Ключове слово this ---------------
// const mango = {
//   username: 'Mango',
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector('.js-btn');

// ✅ Працює
// mango.showUsername();

// ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// btn.addEventListener('click', mango.showUsername); // не працює

// ✅ Не забувайте прив'язувати контекст методів об'єкта
// magic.addEventListener('click', mango.showUsername.bind(mango));

//
//
// --------------------- Об'єкт події ---------------------
// const handleClick = event => {
//   console.log(event);
// };

// magic.addEventListener('click', handleClick);

// const handleClicks = event => {
//   console.log('event:- ', event);
//   console.log('event type:- ', event.type);
//   console.log('currentTarget:- ', event.currentTarget);
// };

// magic.addEventListener('click', handleClicks);

//
// -------------- Дії браузера за замовчуванням --------------
// const form = document.querySelector('.register-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

//
//
// ----------------- Події клавіатури -----------------
// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// });

//
// ----------------- Властивості key і code ----------------
// document.addEventListener('keydown', e => {
//   console.log('key: ', e.key);
//   console.log('code: ', e.code);
// });

// ----------------- Клавіші-модифікатори ----------------
// document.addEventListener('keydown', e => {
//   e.preventDefault();

//   if ((e.ctrlKey || e.metaKey) && e.code == 'KeyS') {
//     console.log('«Ctrl + s» or «Command + s» combo');
//   }
// });

//
// ----------------- Події елементів форм ----------------
// -------------- Подія submit --------------
// const form = document.querySelector('.register-form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

//
// ------------------- Подія change -----------------
// const select = document.querySelector('.pizza-select');
// console.log(select.value);
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// setOutput();

// select.addEventListener('change', setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

//
// -------------------- Подія input ------------------
// const textInput = document.querySelector('.text-input');
// const output = document.querySelector('.output');

// textInput.addEventListener('input', e => {
//   output.textContent = e.currentTarget.value;
// });

//
// ------------------ Подія focus і blur ----------------
// const textInput = document.querySelector('.text-input');
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusbtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener('click', () => {
//   textInput.focus();
// });

// removeFocusbtn.addEventListener('click', () => {
//   textInput.blur();
// });

// textInput.addEventListener('focus', () => {
//   textInput.value = 'Цей вхід має фокус';
// });

// textInput.addEventListener('blur', () => {
//   textInput.value = '';
// });

//
//
//
/*  ----------------------- module 6 модалка -----------------------  */
// const refs = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// };

// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModalBtn);
// refs.backdrop.addEventListener('click', onBackdropClick);

// function onOpenModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   document.body.classList.add('show-modal');
// }

// function onCloseModalBtn() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   document.body.classList.remove('show-modal');
// }

// function onBackdropClick() {
//   if (event.currentTarget === event.target) {
//     onCloseModalBtn();
//   }
// }

// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;
//   if (isEscKey) {
//     onCloseModalBtn();
//   }
// }
