const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];

function createParticle(x, y) {
  particles.push({
    x, y,
    size: Math.random() * 3 + 1,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1,
    color: "rgba(255, 255, 255, 0.7)"
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.x += p.speedX;
    p.y += p.speedY;
    p.size *= 0.97;
    if (p.size < 0.3) {
      particles.splice(i, 1);
      i--;
    }
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(animateParticles);
}

window.addEventListener("click", e => createParticle(e.x, e.y));
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});
animateParticles();

// Функция для переключения между режимами
function toggleMode() {
  const body = document.body;

  // Переключаем классы для переключения между режимами
  if (body.classList.contains("phone-mode")) {
    body.classList.remove("phone-mode");
    body.classList.add("pc-mode");
  } else {
    body.classList.remove("pc-mode");
    body.classList.add("phone-mode");
  }
}
