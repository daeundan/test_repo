// scroll event
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const logo = document.querySelector("#logo");
  const gnbDesktop = document.querySelector(".gnbDesktop");
  const gnbMobile = document.querySelector(".gnbMobile");
  const trigger = document.querySelectorAll(".trigger span");

  if (window.scrollY > 60) {
    header.classList.add("active");
    nav.classList.add("active");
    logo.classList.add("active");
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
    trigger.forEach((bar) => {
      bar.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
    trigger.forEach((bar) => {
      bar.classList.remove("active");
    });
  }
});

// toggle event
const toggleBtn = document.querySelector(".trigger");
toggleBtn.addEventListener("click", function () {
  const gnbMobile = document.querySelector(".gnbMobile");
  gnbMobile.classList.toggle("open");
  this.classList.toggle("active");
});

// searchbar trigger
const searchBar = document.querySelectorAll("ul .fa-magnifying-glass");
const searchResult = document.querySelector(".search_bar");
const closeBtn = document.querySelector(".fa-xmark");

searchBar.forEach((item) => {
  item.addEventListener("click", () => {
    searchResult.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  searchResult.classList.remove("active");
});

// main slide
const slideContainerArrow = document.querySelector(".slide_container_arrow"); // 슬라이드 영역
const slideArrows = document.querySelectorAll(".slide_container_btn"); // 슬라이드 버튼
const slidePagers = document.querySelectorAll(".slide_pager span"); // 슬라이드 페이저
const slideImg = document.querySelector(".slide_img"); // 슬라이드 이미지

// 배열
const pics = ["slide1.png", "slide2.png", "slide3.png"];
let i = 0;
let isTransitioning = false;

slideImg.style.backgroundImage = `url(./img/${pics[i]})`;
slidePagers[0].classList.add("active");

slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    // if (isTransitioning) return;
    // isTransitioning = true;

    if (e.target.id === "leftArrow") {
      console.log("left");
    } else if (e.target.id === "rightArrow") {
      console.log("right");
    }
  });
});

const updateSlide = () => {};

setInterval(() => {}, 4000);
