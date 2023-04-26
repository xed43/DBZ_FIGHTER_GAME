let goku = document.getElementById("goku");
let freeza = document.getElementById("freeza");
let msgContainer = document.querySelector(".message-container");
let counter = document.getElementById("counter");
let gameover = document.getElementById("gameover");
let button = document.getElementById("startover");
let modal = document.querySelector(".victory");
let audio = document.querySelector(".audio");
let defeatAudio = document.querySelector(".defeated");
let successAudio = document.querySelector(".success");
let showCredits = document.querySelector(".credits");

let jumpCounter = 0;

function jump() {
  if (goku.classList !== "animate") {
    goku.classList.add("animate");
    jumpCounter++;

    counter.innerText = `You've jumped: ${jumpCounter}`;
    if (jumpCounter > 3) {
      audio.pause();

      modal.classList.add("show");
      freeza.remove();
      successAudio.play();

      setTimeout(() => {
        goku.remove();
        msgContainer.remove();

        showCredits.classList.toggle("show-credits");
      }, 2000);
    }
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
      audio.pause();
      defeatAudio.play();
    }

    if (jumpCounter > 3) {
      counter = counter.value;
    }

    gameover.classList.add("active");
    button.classList.add("show-btn");
    jumpCounter.classList.remove();
  }
}, 100);
