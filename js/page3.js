// page3.js — scroll story page dengan background musik dan kontrol play/pause

// === DATA CERITA ===
const stories = [
  {
    img: "assets/images/story1.jpg",
    text: "This is the moment dimana semua kebahagiaan ini terjadi wkwk. 12 Agustus 2025"
  },
  {
    img: "assets/images/story2.jpg",
    text: "dan Inilah momen dimana for the first time kita video call hahahaa, bukan pertama kali video call sih tapi lebih ke pertama kali kita videocall dan kamu NGELIATIN MUKA KAMU!"
  },
  {
    img: "assets/images/story3.jpg",
    text: "dan ini as far as i remember adalah foto pertama yang kamu kasih ke aku"
  },
  {
    img: "assets/images/Story4.jpg",
    text: "hampir ketinggalan, ini adalah hal yang kulihat sampe kamu berani memperlihatkan muka kamu ke aku wkwk, dan ya ampun itu aku kenapa maskeran di dalem kamar wkwkwkkw"
  },
  {
    img: "assets/images/story5.jpg",
    text: "Kok ada manusia berani pegang kodok kek gitu ewwww, btw ini km lagi praktikum"
  },
  {
    img: "assets/images/story6.jpg",
    text: "Panjang Cerita, finally kita ketemu for the first time. saat itu kamu datang ke bandung dan kita saling lihat pertama kali di depan orang tua dan keluargaku wkwk. dan Ini adalah foto bareng kita pertama, karena aku ga megang foto pas pertama ketemu bgt. tepat foto ini di ambil, kita lagi jalan-jalan pake motor dan kehujanan."
  },
    {
    img: "assets/images/story7.jpg",
    text: "besoknya, aku kamu dan depin pergi ke Bandung. dan ini di fotoin depin pas kita lagi bergandengan tangan anjayyyy di deket gedung sate lagi jalan ke bagian museumnya "
  },
    {
    img: "assets/images/story8.jpg",
    text: "dan setelah pulang dari Bandung foto-fotonya di keep aja masing-masing yaa wkwkw, itu foto personal. dan foto ini adalah foto dimana kamu pamit ke orang tua aku buat pulang ke Jambi. "
  },
  {
    img: "assets/images/story9.jpg",
    text: "yang ini no komen dehh wkwk, nanti kita remake yaaa "
  },
  {
    img: "assets/images/story10.jpg",
    text: "Selamat ulang tahun, pretty. Terima kasih telah tumbuh dan berjuang dengan begitu indah, hingga akhirnya aku bisa menyaksikan betapa luar biasanya dirimu hari ini. Semoga setiap langkah ke depan selalu dipenuhi kebahagiaan, dan izinkan aku tetap menjadi bagian dari setiap ceritamu yang akan datang."
  }
];

// === RENDER CERITA ===
const listEl = document.getElementById("story-list");
stories.forEach((s) => {
  const item = document.createElement("section");
  item.className = "story-item";

  const photoWrap = document.createElement("div");
  photoWrap.className = "photo";
  const img = document.createElement("img");
  img.dataset.src = s.img;
  img.alt = "story photo";
  photoWrap.appendChild(img);

  const desc = document.createElement("div");
  desc.className = "desc";
  desc.textContent = s.text;

  item.appendChild(photoWrap);
  item.appendChild(desc);

  listEl.appendChild(item);
});

// === ANIMASI SCROLL & LAZY LOAD ===
const ioOptions = {
  root: null,
  threshold: 0.15
};

const onIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const img = el.querySelector("img");
      if (img && img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      }
      el.classList.add("visible");
      observer.unobserve(el);
    }
  });
};

const observer = new IntersectionObserver(onIntersect, ioOptions);
document.querySelectorAll(".story-item").forEach(item => observer.observe(item));

// === NAVIGASI KE PAGE 4 ===
document.getElementById("to-page4").addEventListener("click", () => {
  window.location.href = "page4.html";
});

// === BACKGROUND MUSIC ===
const bgMusic = new Audio("assets/music/bgm.wav"); // Ganti dengan musik kamu
bgMusic.loop = true;
bgMusic.volume = 0.4;

const toggleBtn = document.getElementById("music-toggle");
let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play().catch(() => console.warn("Autoplay dicegah oleh browser."));
    toggleBtn.textContent = "⏸️";
    isPlaying = true;
  } else {
    bgMusic.pause();
    toggleBtn.textContent = "▶️";
    isPlaying = false;
  }
});
