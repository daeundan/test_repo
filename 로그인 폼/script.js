const tokenButton = document.querySelector("#token_button");

const changePhone1 = () => {
  const phone1 = document.querySelector("#phone1").value;
  if (phone1.length === 3) {
    document.querySelector("#phone2").focus();
  }
};

const changePhone2 = () => {
  const phone2 = document.querySelector("#phone2").value;
  if (phone2.length === 4) {
    document.querySelector("#phone3").focus();
  }
};

const changePhone3 = () => {
  const phone1 = document.querySelector("#phone1").value;
  const phone2 = document.querySelector("#phone2").value;
  const phone3 = document.querySelector("#phone3").value;

  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    tokenButton.style =
      "background-color: #fff; color: #0068ff; cursor: pointer";
    token_button.removeAttribute("disabled");
  }
};

const getTokenTimer = () => {
  let timer = 180;
  let interval = setInterval(() => {
    if (timer >= 0) {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      document.querySelector("#token_timer").innerText =
        minutees + ":" + String(seconds).padStart(2, "0");
      } else {
    }
  }, 1000);
};

tokenButton.addEventListener("click", (e) => {
  e.preventDefault();
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector("#token").innerText = token;
  const tokenConfirmButton = document.querySelector("#token_timer_confirmBtn");
  tokenConfirmButton.style =
    "background-color: #0068ff; color: #fff; cursor: pointer";
  tokenConfirmButton.removeAttribute("disabled");
  getTokenTimer();
});
