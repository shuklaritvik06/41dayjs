const hero = document.getElementById("hero");
const wolf = document.getElementById("wolf");
window.addEventListener("keyup", (e) => {
  if (e.code == "Space") {
    hero.classList.add("jump");
    setTimeout(() => {
      hero.classList.remove("jump");
    }, 1200);
  }
});

setInterval(() => {
  const heroRect = hero.getBoundingClientRect();
  const wolfRect = wolf.getBoundingClientRect();
  if (heroRect.left >= wolfRect.left && heroRect.top >= wolfRect.top) {
    alert("Game Over");
  }
}, 10);
