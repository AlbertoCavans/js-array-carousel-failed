/* LINKS TO HTML */
const carouselBox = document.getElementsByClassName("carousel-box");

/* ARRAY */
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

let slidesHTMLimg = "";
for (let i = 0; i < slides.length; i++) {
  const imgSlide = slides[i];

  let classActive;

  if (i == 0) {
    classActive = "active";
  } else {
    classActive = "";
  }
  slidesHTMLimg += `<img src="./img/${imgSlide}" alt="slide${i}" class="slide ${classActive}" />`;
}

carouselBox.innerHTML = slidesHTMLimg;
