/* LINKS TO HTML */
const carouselBox = document.getElementById("carousel-box");
const arrowUp = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowDown");
const imgBox = document.getElementById("img-box");
let visualizedImg = 0;

/* ARRAY */
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

/*  SLIDES */

const visualizedImgUrl = slides[visualizedImg];
const imgHtml = `<img src="./img/${visualizedImgUrl}" alt="slide${
  visualizedImg + 1
}" class="slide"/>`;

carouselBox.innerHTML = imgHtml;

let sildesHtml = "";
for (let i = 0; i < slides.length; i++) {
  const imgSlide = slides[i];

  let classActive;
  if (i == 0) {
    classActive = "active";
  } else {
    classActive = "";
  }

  slidesHTML = `<div class="d-flex align-items-center ${classActive}" id="img-box"><img src="./img/${imgSlide}" class="slide"/></div>`;
}

imgBox.innerHTML = slidesHTML;

/* BUTTON DOWN */

arrowDown.addEventListener("click", function () {
  const allImgs = document.querySelector(img);
  const prevImg = carouselBox[visualizedImg];
  prevImg.classList.remove("active");

  visualizedImg++;

  const nextImg = allImgs[classActive];
  nextImg.classList.add("active");

  const visualizedImgUrl = slides[visualizedImg];
  const imgHtml = `<img src="./img/${visualizedImgUrl}" alt="slide${
    visualizedImg + 1
  }" class="slide"/>`;

  carouselBox.innerHTML = imgHtml;

  if (classActive == slides.length - 1) this.classList.add("d-none");
});

/* BUTTON UP */

arrowUp.addEventListener("click", function () {
  const allImgs = document.querySelector(img);
  const prevImg = carouselBox[visualizedImg];
  prevImg.classList.remove("active");

  visualizedImg--;

  const nextImg = allImgs[classActive];
  nextImg.classList.add("active");

  const visualizedImgUrl = slides[visualizedImg];
  const imgHtml = `<img src="./img/${visualizedImgUrl}" alt="slide${
    visualizedImg + 1
  }" class="slide"/>`;

  carouselBox.innerHTML = imgHtml;

  if (classActive === 0) this.classList.add("d-none");
});
