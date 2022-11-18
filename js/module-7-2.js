//  ------------- методи Throttle і Debounce --------------
// const tech = [
//   { label: "HTML" },
//   { label: "CSS" },
//   { label: "JavaScript" },
//   { label: "Node.js" },
//   { label: "React" },
//   { label: "Veu" },
//   { label: "Next.js" },
//   { label: "Mobx" },
//   { label: "Redux" },
//   { label: "React Router" },
//   { label: "GraphQl" },
//   { label: "PostgreSql" },
//   { label: "MongoDB" },
// ];

// const refs = {
//   list: document.querySelector(".js-list"),
//   input: document.querySelector("#filter"),
// };

// refs.input.addEventListener("input", _.debounce(onFilterChande, 300));

// const listItemsMarkup = createListItemsMarkup(tech);

// populateList(listItemsMarkup);

// function createListItemsMarkup(items) {
//   return items.map((item) => `<li>${item.label}</li>`).join("");
// }

// function onFilterChande(e) {
//   const filter = e.target.value.toLowerCase();

//   const filteredItems = tech.filter((t) =>
//     t.label.toLowerCase().includes(filter)
//   );

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   populateList(listItemsMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }

//
//
//  ----------- Лінива загрузка зображень ----------------
if ("loading" in HTMLImageElement.prototype) {
  console.log("Браузер підтримує ліниву загрузку");

  addSrcAttrTolazyImages();
} else {
  console.log("Браузер НЕ підтримує ліниву загрузку");

  addLazySizeLoaded();
}

function addSrcAttrTolazyImages(e) {
  const lazyImages = document.querySelector('img[loading="lazy"]');

  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
}

function addLazySizeLoaded(e) {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js";
  script.integrity =
    "sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==";
  script.crossorigin = "anonymous";
  script.referrerpolicy = "no-referrer";

  document.body.appendChild(script);
}
