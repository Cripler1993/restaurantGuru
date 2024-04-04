let locationContainer = document.querySelector(".location__container");
let locationTemplate = document.querySelector("#language");
let mainLocationFlag = document.querySelector(".mainFlag");

let languages = [
  { name: "russian", src: "./img/russiaFlag.png", selected: true },
  { name: "english", src: "./img/en.png", selected: false },
  { name: "espanol", src: "./img/es.png", selected: false },
];

function renderLanguages(arr) {
  arr.forEach((elem) => {
    if (!elem.selected) {
      let language = locationTemplate.content.cloneNode(true);

      let languageFlag = language.querySelector(".languageFlag");
      let languageName = language.querySelector(".languageName");
      let cloneLocation = language.querySelectorAll(".location");

      cloneLocationLocation.forEach((element, index) => {
        element.addEventListener("click", function (event) {
          console.log(event.target);
          console.log(index);
          if (!event.target) {
            elem.selected = false;
          } else {
            elem.selected = true;
          }
          console.log(languages);
        });
      });

      languageName.innerHTML = elem.name;
      languageFlag.src = elem.src;

      locationContainer.append(language);
    } else {
      mainLocationFlag = elem.src;
    }
  });
}
renderLanguages(languages);

// function openDropDown() {
//   mainLocationFlag.addEventListener("click", function () {
//     locationContainer.classList.add("active");
//   });
// }
// openDropDown();
// закрытие по всему окну и крестику
