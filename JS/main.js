/* LINKS TO HTML */
const carouselBox = document.getElementById("carousel-box");
const arrowUp = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowDown");

/* ARRAY */
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

/*  SLIDES */
let slidesHTMLimg = "";
for (let i = 0; i < slides.length; i++) {
  const imgSlide = slides[i];

  let classActive;
  if (i == 0) {
    classActive = "active";
  } else {
    classActive = "";
  }

  slidesHTMLimg = `<img src="./img/${imgSlide}" alt="slide${i}" class="slide ${classActive}"/>`;
}

carouselBox.innerHTML = slidesHTMLimg;

/* BUTTON UP */

arrowUp.addEventListener("click", function () {});

/* BUTTON DOWN */
