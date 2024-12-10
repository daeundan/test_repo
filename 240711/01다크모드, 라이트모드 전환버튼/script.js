const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.innerText = "라이트모드로 바꾸기";
  } else {
    btn.innerText = "다크모드로 바꾸기";
  }
}); //함수 안에 함수 = 콜백함수 (e)이벤트객체=(참조변수) 정반대일 경우 = 가상클래스 contains 있으면 true 없으면 펄스 반영해라 조건식은 트루일때만 실행됨 dark가 있으면 true를 반영해줘. else는 앞의 if문이 참이 아니면,(라이트가 아니면) 다크로 다시 바꿔줘//
