let count = 1;
let chance = 0;

const ambient = document.getElementById("ambient");
const timerEl = document.getElementById("timer");

// browsers block autoplay without user interaction
document.addEventListener(
  "click",
  () => {
    ambient.volume = 0.9; // softer background audio
    ambient.play();
  },
  { once: true }
);

function openModal() {
  // https://www.w3schools.com/howto/howto_css_modals.asp
  // https://www.w3schools.com/css/css_positioning.asp
  // essentially you have a second page that is "position: fixed" filling up the screen, but it is in "display: none" so you can't see it!
  document.getElementById("myModal").style.display = "flex";
  document.getElementById("pap").play();
}

function jigDor() {
  document.getElementById("kob").play();
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

function pupPuz1() {
  if (count == 1) {
    count += 1;
    document.getElementById("thr").play();
  } else {
    count = 1;
    console.log("meow?");
    chgPic();
  }
}
function pupPuz2() {
  if (count == 2) {
    count += 1;
    document.getElementById("for").play();
  } else {
    count = 1;
    console.log("meow?");
    chgPic();
  }
}

function pupPuz3() {
  if (count == 3) {
    count += 1;
    document.getElementById("two").play();
  } else {
    count = 1;
    console.log("meow?");
    chgPic();
  }
}

function pupPuz4() {
  if (count == 4) {
    document.getElementById("one").play();
    openModal2();
  } else {
    count = 1;
    console.log("meow?");
    chgPic();
  }
}

function openModal2() {
  // https://www.w3schools.com/howto/howto_css_modals.asp
  // https://www.w3schools.com/css/css_positioning.asp
  // essentially you have a second page that is "position: fixed" filling up the screen, but it is in "display: none" so you can't see it!
  document.getElementById("myModal2").style.display = "flex";
  console.log("MROW");
  if (ambient) {
    ambient.pause();
    ambient.currentTime = 0;
  }
  document.getElementById("timer").style.display = "none";
}

function chgPic() {
  chance += 1;
  document.getElementById("face").src = "images/owow.png";
  document.getElementById("ow").volume = 1;
  document.getElementById("ow").play();
  timeLeft -= 20;
  if (timeLeft < 0) timeLeft = 0; // prevent negative
  setTimeout(() => {
    document.getElementById("face").src = "gifs/ror.gif";
  }, 2000);
  chCk();
}

function chCk() {
  if (chance == 4) {
    console.log("HAhhd?");
  }
}

function dor() {
  document.getElementById("oh").src = "images/door1.png";
  document.getElementById("open").play();
  window.location.href = "https://ihatethathedgehog3.github.io/end/";
}

let timeLeft = 90; // 90 seconds
let timerInterval;

// Show starting time but don't start countdown
function displayInitialTime() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerEl.textContent =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
}
displayInitialTime();

// Start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerEl.textContent =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "00:00";
      // OPTIONAL: alert("Time's up!");
      if (ambient) {
        ambient.pause();
        ambient.currentTime = 0;
      }
      console.log("Timer finished! Doing something...");
      document.getElementById("jumpscare").style.display = "flex";
      document.getElementById("ahh").play();
      setTimeout(function () {
        location.reload();
      }, 1000);
    }

    timeLeft--;
  }, 1000);
}

// Start only when player clicks anywhere
document.addEventListener(
  "click",
  function startOnClick() {
    startTimer();
    document.removeEventListener("click", startOnClick);
  },
  { once: true }
);
