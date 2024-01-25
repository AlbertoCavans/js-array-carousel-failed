/* LINKS TO HTML */
const slidesBox = document.querySelector(".slides-container");
const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelector(".arrowDown");

/* ARRAY */
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

let visualizedImg = 0;
/*  SLIDES */

/* const visualizedImgUrl = slides[visualizedImg];
const imgHtml = `<img src="./img/${visualizedImgUrl}" alt="slide${
  visualizedImg + 1
}" class="slide"/>`;

carouselBox.innerHTML = imgHtml; */

let slidesHtml = "";
for (let i = 0; i < slides.length; i++) {
  const imgSlide = slides[i];

  let activeClass = i == visualizedImg ? "active" : "";

  slidesHtml += `<img src="./img/${imgSlide}" class="slide ${activeClass}" alt="slide${i}"/>`;
}

slidesBox.innerHTML = slidesHtml;

/* BUTTON DOWN */

arrowDown.addEventListener("click", function () {
  const allImgs = document.querySelector(".img");
  const prevImg = allImgs[visualizedImg];
  prevImg.classList.remove("active");

  if (visualizedImg >= allImgs.length - 1) {
    visualizedImg = 0;
  } else {
    visualizedImg++;
  }

  const nextImg = allImgs[visualizedImg];
  nextImg.classList.add("active");
});

/* BUTTON UP */

arrowDown.addEventListener("click", function () {
  const allImgs = document.querySelector(".img");
  const prevImg = allImgs[visualizedImg];
  prevImg.classList.remove("active");

  if (visualizedImg <= 0) {
    visualizedImg = 0;
  } else {
    visualizedImg--;
  }

  const nextImg = allImgs[visualizedImg];
  nextImg.classList.add("active");
});
