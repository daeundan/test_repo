// 변수 선언, 필수적으로 ""써야함 윈도우버튼+마침표는 이모지가 나옴 \n은 행을 나누는 기능
const content =
  "Hi!🎨 I'm Chloe, \n Front-end Developer. \n Welcome to My World :D";

const text = document.querySelector(".text");

let i = 0;

const typing = () => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  //내가 작성한 문자만 입력되게 하는 조건문
  //텍스트가 초과하면 다시 원점으로 돌아가게 한다
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
};
//1초는 1000밀리초 1초에 1번씩 타이핑을 하게 해줘
setInterval(typing, 250);
