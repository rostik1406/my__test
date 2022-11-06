const magicBtn = document.querySelector('.js-magic-btn');
//
//
// ----------- Код додавання кнопок -----------
// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClick);

// function onClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   console.log(e.target.textContent);
// }

// // ----------- Код додавання кнопок -----------
// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddbtnClick);

// function onAddbtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.classList = 'm-7__button';
//   btn.type = 'button';
//   container.appendChild(btn);
//   labelCounter += 1;
// }

//
// ------- делегірування ---------------
// ------- Спосіб який вибирає 1 обєкт із багатьох ------
// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');
//   //   if (currentActiveBtn) {
//   //     currentActiveBtn.classList.remove('tags__btn--active');
//   //   }
//   currentActiveBtn?.classList.remove('tags__btn--active');

//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

//
// ------- Спосіб який вибирає більше ніж 1 обєкт ---------
// ???...
