document.getElementById("year").textContent = new Date().getFullYear();

const body = document.body;
const introGate = document.getElementById("introGate");
const enterButton = document.getElementById("enterButton");
const introVideo = document.getElementById("introVideo");
const introSeenKey = "portfolio_intro_seen";

function closeIntro() {
  body.classList.remove("intro-lock");
  body.classList.add("intro-done");
  sessionStorage.setItem(introSeenKey, "1");
  if (introVideo) {
    introVideo.pause();
  }
}

if (sessionStorage.getItem(introSeenKey) === "1") {
  closeIntro();
} else {
  body.classList.add("intro-lock");
}

if (enterButton) {
  enterButton.addEventListener("click", closeIntro);
}

if (introVideo) {
  introVideo.addEventListener("ended", () => {
    enterButton?.focus();
  });

  introVideo.addEventListener("error", closeIntro);
}

document.addEventListener("keydown", (event) => {
  if (!introGate || body.classList.contains("intro-done")) {
    return;
  }

  if (event.key === "Enter" || event.key === "Escape" || event.key === " ") {
    event.preventDefault();
    closeIntro();
  }
});
