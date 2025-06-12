const btnPesan = document.getElementById("btnPesan");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");
const okBtn = document.getElementById("okBtn");

// Saat tombol Pesan Sekarang diklik, tampilkan popup
btnPesan.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Saat tombol tutup diklik, sembunyikan popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Saat tombol OK diklik, sembunyikan popup
okBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Jika klik di luar popup-content, popup juga ditutup
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
