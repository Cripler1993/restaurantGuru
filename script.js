const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  // Default parameters
  slidesPerView: 1.1,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    620: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    920: {
      slidesPerView: 3,
      spaceBetween: 18,
    },

    1225: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-img",
    prevEl: ".swiper-button-prev-img",
  },
});

let locationContainer = document.querySelector(".location__container");
let locationTemplate = document.querySelector("#language");
let mainLocationFlag = document.querySelector(".mainFlag");
let locationContainerLanguages = document.querySelector(
  ".location__container-languages"
);
let closeBtn = document.querySelector(".location__container-close");

let languages = [
  { name: "russian", src: "./img/russiaFlag.png", selected: true },
  { name: "english", src: "./img/en.png", selected: false },
  { name: "espanol", src: "./img/es.png", selected: false },
];

function renderLanguages(arr) {
  locationContainerLanguages.innerHTML = "";
  arr.forEach((elem) => {
    if (!elem.selected) {
      let language = locationTemplate.content.cloneNode(true);

      let languageFlag = language.querySelector(".languageFlag");
      let languageName = language.querySelector(".languageName");
      let cloneLocation = language.querySelector(".location");

      languageName.innerHTML = elem.name;
      languageFlag.src = elem.src;

      cloneLocation.addEventListener("click", function () {
        arr.forEach((element) => {
          if (elem.name == element.name) {
            element.selected = true;
          } else {
            element.selected = false;
          }
        });
        renderLanguages(arr);
      });

      locationContainerLanguages.append(language);
    } else {
      mainLocationFlag.src = elem.src;
    }
  });
}
renderLanguages(languages);

mainLocationFlag.addEventListener("click", function () {
  locationContainer.classList.add("location__container-active");
});

function closeDropDown() {
  locationContainer.classList.remove("location__container-active");
}

closeBtn.addEventListener("click", closeDropDown);

document.body.addEventListener("click", function (event) {
  if (
    !event.target.closest(".mainFlag") &&
    !event.target.closest(".location__container")
  ) {
    closeDropDown();
  }
});
