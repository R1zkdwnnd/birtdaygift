const giftBox = document.getElementById("giftBox");
const modal = document.getElementById("letterModal");
const closeModal = document.getElementById("closeModal");
const bgMusic = document.getElementById("bgMusic");
const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

// 🎁 Gift click logic
giftBox.addEventListener("click", () => {
  // Play music
  bgMusic.play();

  // Show confetti
  startConfetti();

  // Show letter modal
  modal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// 🎊 Confetti logic
let confetti = [];
for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 0.5 + 0.5,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
  });
}

function startConfetti() {
  function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    updateConfetti();
    requestAnimationFrame(drawConfetti);
  }
  drawConfetti();
}

function updateConfetti() {
  confetti.forEach((c) => {
    c.y += c.d * 3;
    if (c.y > confettiCanvas.height) {
      c.y = -10;
      c.x = Math.random() * confettiCanvas.width;
    }
  });
}

// Responsiveness
window.addEventListener("resize", () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});
