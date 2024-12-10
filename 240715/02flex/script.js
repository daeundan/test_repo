// Header Nav //
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  //스크롤바가 50보다 높은 값으로 내려오게 된다면
  //active값을 추가해달라 //
  //IF문의 반대는 ELSE문. 그반대의 경우에는
  // active 없애달라
  if (scroll > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
// 오른쪽 스크롤바가 움직이면 이벤트가 실행된다//
// header 밖에 써도 되지만 전역변수 안쓰는게 좋음 웹브라우저가 코드읽는데 시간이 걸림 //

// Slick Slider
$(".myslider").slick({
  dots: false, // 밑에 있는 페이저
  infinite: true, // false 한번 회전한 다음 안돌아감
  autoplay: true,
  speed: 100, //300은 3초 100은 1초
  slidesToShow: 3, // 한 지면에 몇개의 컨텐츠를 보여줄 것인지
  slidesToScroll: 3, // 한번 스크롤했을 때 몇개를 보여줄 것인지
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
