const magicBtn = document.querySelector(".js-magic-btn");
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
// const tagsContainer = document.querySelector(".js-tags");
// const selectedTags = new Set();

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const btn = e.target;
//   const tag = btn.dataset.value;
//   const isBtnActive = btn.classList.contains("tags__btn--active");

//   if (isBtnActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   btn.classList.toggle("tags__btn--active");
//   console.log(selectedTags);
// }

//
//
// ----------- color--Picker --------------
// const colors = [
//   { hex: "#f44336", rgb: "244, 67, 54" },
//   { hex: "#e91e63", rgb: "233, 38, 99" },
//   { hex: "#9c27b0", rgb: "156, 59, 176" },
//   { hex: "#673ab7", rgb: "103, 58, 183" },
//   { hex: "#3f51b5", rgb: "63, 81, 181" },
//   { hex: "#2196f3", rgb: "33, 150, 243" },
//   { hex: "#00bcd4", rgb: "0, 188, 212" },
//   { hex: "#009688", rgb: "0, 150, 136" },
//   { hex: "#4caf50", rgb: "76, 175, 80" },
//   { hex: "#ffeb3d", rgb: "255, 235, 59" },
//   { hex: "#ff9800", rgb: "255, 152, 0" },
//   { hex: "#795548", rgb: "121, 85, 72" },
//   { hex: "#607d8b", rgb: "96, 125, 139" },
// ];

// const paletteContainer = document.querySelector(".js-palette");
// const cardsMarkup = createColorCardMarkup(colors);

// paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// paletteContainer.addEventListener("click", onPaletteContainerClick);

// function createColorCardMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//         <div class="color-card">
//             <div
//                 class="color-swatch"
//                 data-hex="${hex}"
//                 data-rgb="${rgb}"
//                 style="background-color: ${hex}"
//                 ></div>
//                 <div class="color-meta">
//                 <p>HEX: ${hex}</p>
//                 <p>RGB: ${rgb}</p>
//             </div>
//         </div>
//     `;
//     })
//     .join("");
// }

// function onPaletteContainerClick(e) {
//   const ixColorSwatchEl = e.target.classList.contains("color-swatch");
//   if (!ixColorSwatchEl) {
//     return;
//   }

//   const swatchEl = e.target;
//   const parentColorCard = swatchEl.closest(".color-card");

//   removeActivCardClass();
//   addActivCardClass(parentColorCard);
//   setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActivCardClass() {
//   const currentActiveCard = document.querySelector(".color-card.is-active");

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove("is-active");
//   }
// }

// function addActivCardClass(card) {
//   card.classList.add("is-active");
// }
