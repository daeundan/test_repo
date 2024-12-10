// [ 설 계 ]

// 1. 웹 브라우저에게 클릭할 이벤트 대상을 알려준다.
// ******* querySelector()
// ******* addEventListenet()

// 2. 클릭을 했을 때, css로 정의해 놓은 가상 클래스를 원하는 요소에 적용시킨다.
// 2-1. 가상 클래스에는 " filledA & filledB " 가 있다.
// ******* classList 속성 활용
// ******* add() 또는 remove() 함수 활용
// button => 기본 속성 // 무력화(방해)하는 요소가 필요하다.
// ******* preeventDefault() 사용

//const femaleBtn = document.querySelector("#femaleBtn");
const femaleBtn = document.getElementById("femalebtn");
const maleBtn = document.getElementById("malebtn");

femaleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
