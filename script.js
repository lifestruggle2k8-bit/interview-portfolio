document.getElementById("year").textContent = new Date().getFullYear();

const body = document.body;
const introGate = document.getElementById("introGate");
const enterButton = document.getElementById("enterButton");
const introVideo = document.getElementById("introVideo");
const introSeenKey = "portfolio_intro_seen";
const introMobileQuery = window.matchMedia("(max-width: 720px)");
let introVideoResolved = false;

function pickIntroSource() {
  if (!introVideo) {
    return null;
  }

  return introMobileQuery.matches
    ? introVideo.dataset.mobileSrc || introVideo.dataset.fallbackSrc
    : introVideo.dataset.desktopSrc || introVideo.dataset.fallbackSrc;
}

function applyIntroSource() {
  if (!introVideo) {
    return;
  }

  const nextSrc = pickIntroSource();
  if (!nextSrc || introVideo.getAttribute("src") === nextSrc) {
    return;
  }

  introVideo.setAttribute("src", nextSrc);
  introVideo.load();
  introVideoResolved = nextSrc === introVideo.dataset.fallbackSrc;
}

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
  applyIntroSource();

  introVideo.addEventListener("ended", () => {
    enterButton?.focus();
  });

  introVideo.addEventListener("error", () => {
    if (introVideoResolved) {
      closeIntro();
      return;
    }

    introVideoResolved = true;
    introVideo.setAttribute("src", introVideo.dataset.fallbackSrc || "");
    introVideo.load();
  });

  introMobileQuery.addEventListener("change", applyIntroSource);
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
