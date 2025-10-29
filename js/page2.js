const introSection = document.getElementById("intro-text");
const journeySection = document.getElementById("journey-section");
const startBtn = document.getElementById("start-journey");
const photo = document.getElementById("journey-photo");
const caption = document.getElementById("journey-caption");
const nextPageBtn = document.getElementById("to-page3-btn");

// --- Background Music ---
const bgMusic = new Audio("assets/music/bgm.wav"); // ganti dengan musik kamu
bgMusic.loop = true;
bgMusic.volume = 0.35;
let musicPlayed = false;

const journeyData = [
  { img: "assets/images/img1.png", text: "Sejak kecil, dunia ini sudah menyiapkan cerita panjang yang akhirnya membawamu sampai ke hari ini. 💕" },
  { img: "assets/images/img2.png", text: "Dari senyum polos masa anak-anak, langkah-langkah kecilmu mulai menapaki arti kehidupan." },
  { img: "assets/images/img3.jpg", text: "Sejak saat itu, kamu belajar mencintai, kecewa, berjuang, dan menemukan makna dari setiap luka.✨" },
  { img: "assets/images/img4.jpg", text: "Waktu terus berjalan, dan setiap detik membentuk dirimu menjadi seseorang yang begitu kuat dan lembut sekaligus."},
  { img: "assets/images/img5.jpg", text: "Di balik setiap senyum yang kamu punya, ada perjalanan panjang yang penuh keberanian."},
  { img: "assets/images/img6.jpg", text: "Setiap kenangan yang membentuk diri kamu, kini menjadi bagian dari kisah kita yang terus tumbuh."},
  { img: "assets/images/img7.jpg", text: "Dan di hari ulang tahunmu ini, aku ingin kamu tahu betapa berharganya perjalanan yang sudah kamu tempuh."},
  { img: "assets/images/img8.jpg", text: "Andai waktu tak menuntunmu sejauh ini, mungkin aku takkan pernah tahu bagaimana rasanya mencintai seseorang seindah dirimu"},
  { img: "assets/images/img9.jpg", text: "Selamat ulang tahun untuk seseorang yang membuat hidupku lebih indah dari apa pun yang pernah kuimpikan."}
];

let currentIndex = 0;
let intervalId = null;
let typingTimeout = null;

startBtn.addEventListener("click", () => {
  if (!musicPlayed) {
    bgMusic.play().catch(() => console.warn("Autoplay dicegah oleh browser."));
    musicPlayed = true;
  }

  introSection.classList.add("hidden");
  journeySection.classList.remove("hidden");

  showPhoto(currentIndex);
  startAutoSlide();
});

function typeText(text) {
  caption.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      caption.textContent += text.charAt(i);
      i++;
      typingTimeout = setTimeout(type, 45);
    }
  }

  clearTimeout(typingTimeout);
  type();
}

function showPhoto(index) {
  // Langsung ganti foto dulu biar selalu muncul
  photo.src = journeyData[index].img;

  // Reset animasi fade
  photo.classList.remove("fade-in");
  void photo.offsetWidth; // reset animasi supaya bisa diulang
  photo.classList.add("fade-in");

  // Kosongkan teks sementara
  caption.textContent = "";

  // Delay sedikit sebelum mulai typing effect
  setTimeout(() => {
    typeText(journeyData[index].text);
  }, 1000);

  // Jika sudah di foto terakhir
  if (index === journeyData.length - 1) {
    clearInterval(intervalId);
    setTimeout(() => {
      nextPageBtn.classList.add("show");
    }, 11000);
  }
}


function startAutoSlide() {
  intervalId = setInterval(() => {
    if (currentIndex < journeyData.length - 1) {
      currentIndex++;
      showPhoto(currentIndex);
    }
  }, 10000);
}

// tombol ke page 3
nextPageBtn.addEventListener("click", () => {
  window.location.href = "page3.html";
});
