// Array teks ucapan
const messages = [
  "Click Teksnya buat lanjut!",
  "Halo, Rezkyana!",
  "Happy 21st Birthday",
  "and Welcome to the adult life hehe",
  "Maybe it's not the best gift I could give u",
  "But I hope it could make u happier in ur special day",
  "Hope u like it, enjoy pretty!"
];

const textElement = document.getElementById("birthday-text");
const nextButton = document.getElementById("next-btn");
const content = document.querySelector(".content");

let currentIndex = 0;

// --- tampilkan teks pertama di awal ---
textElement.textContent = messages[currentIndex];
textElement.classList.add("fade-in");

// Fungsi tampil teks berikutnya
function showNextText() {
  if (currentIndex < messages.length - 1) {
    currentIndex++;
    textElement.classList.remove("fade-in");
    void textElement.offsetWidth; // reset animasi
    textElement.textContent = messages[currentIndex];
    textElement.classList.add("fade-in");
  } else {
    nextButton.style.display = "inline-block";
    content.removeEventListener("click", handleClick); // hentikan klik
  }
}

// --- Background Music ---
const bgMusic = new Audio("assets/music/bgm.wav");
bgMusic.loop = true;
bgMusic.volume = 0.3;

let musicPlayed = false;

// Fungsi klik utama (gabung musik + teks)
function handleClick() {
  if (!musicPlayed) {
    bgMusic.play().catch(() => {
      console.warn("Autoplay dicegah oleh browser.");
    });
    musicPlayed = true;
  }
  showNextText();
}

// Event utama hanya satu kali listener
content.addEventListener("click", handleClick);

// Klik tombol next untuk ke halaman 2
nextButton.addEventListener("click", () => {
  window.location.href = "page2.html";
});
