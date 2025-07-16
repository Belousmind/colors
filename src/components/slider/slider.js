const slidesData = [
  "/slide.webp",
  "/slide.webp",
  "/slide.webp",
  "/slide.webp",
  "/slide.webp",
  "/slide.webp",
];

const sliderContainer = document.getElementById("sliderContainer");
const dotsContainer = document.getElementById("dotsContainer");

const slideTemplate = document.getElementById("slide-template");
const dotTemplate = document.getElementById("dot-template");

slidesData.forEach((src, index) => {
  const slideClone = slideTemplate.content.cloneNode(true);
  const slideImg = slideClone.querySelector("img");
  slideImg.src = src;
  slideImg.alt = "slide";
  sliderContainer.appendChild(slideClone);

  const dotClone = dotTemplate.content.cloneNode(true);
  const dot = dotClone.querySelector("li");
  dot.classList.toggle("active", index === 0);
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slider__slide-image");
  const dots = document.querySelectorAll(".slider__dot");

  const slideWidth = slides[0].clientWidth;
  sliderContainer.style.transform = `translateX(-${index * slideWidth}px)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentIndex = index;
}

document.querySelector(".slider__nav--prev").addEventListener("click", () => {
  const totalSlides = slidesData.length;
  const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(newIndex);
});

document.querySelector(".slider__nav--next").addEventListener("click", () => {
  const totalSlides = slidesData.length;
  const newIndex = (currentIndex + 1) % totalSlides;
  showSlide(newIndex);
});

dotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("slider__dot ")) {
    const index = parseInt(e.target.dataset.index, 10);
    showSlide(index);
  }
});

window.addEventListener("resize", () => showSlide(currentIndex));
