let goku = document.getElementById("goku");
let freeza = document.getElementById("freeza");
let counter = document.getElementById("counter");
let gameover = document.getElementById("gameover");
let button = document.getElementById("startover");
let jumpCounter = 0;

function jump() {
  if (goku.classList !== "animate") {
    goku.classList.add("animate");
    jumpCounter++;
    counter.innerText = `You've jumped: ${jumpCounter}`;
  }

  setTimeout(() => {
    goku.classList.remove("animate");
  }, 800);
}

// variable
let checkDead = setInterval(() => {
  let gokuTop = parseInt(window.getComputedStyle(goku).getPropertyValue("top"));
  let freezaLeft = parseInt(
    window.getComputedStyle(freeza).getPropertyValue("left")
  );

  if (freezaLeft < 50 && freezaLeft > 0 && gokuTop >= 130) {
    freeza.style.animate = "hidden";
    freeza.style.display = "none";

    goku.style.animate = "hidden";
    goku.style.display = "none";

    if (gameover) {
      counter = counter.value;
    }

    gameover.classList.add("active");
    button.classList.add("show-btn");
  }
}, 100);
