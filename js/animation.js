// --- Efek Bokeh Lembut dan Aman untuk Background ---

const bokehContainer = document.getElementById("bokeh");
const numBokeh = 25;
const bokehs = [];

// Elemen particle
for (let i = 0; i < numBokeh; i++) {
  const span = document.createElement("span");
  span.classList.add("bokeh");
  span.style.left = `${Math.random() * 100}%`;
  span.style.top = `${Math.random() * 100}%`;
  span.style.width = `${Math.random() * 60 + 20}px`;
  span.style.height = span.style.width;
  span.style.animationDuration = `${10 + Math.random() * 10}s`;
  bokehContainer.appendChild(span);
  bokehs.push(span);
}
