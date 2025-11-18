// ======== BASIC SETUP ========

// Change this to her name or something like "Ayalisse, my nurse 💜"
const customName = "Jhasmine, my honey, my baby";

const nameDisplay = document.getElementById("name-display");
const openLetterBtn = document.getElementById("openLetterBtn");
const letter = document.getElementById("letter");

const lines = document.querySelectorAll(".letter .line");
const photoStories = document.querySelectorAll(".photo-story");
const letterPhotos = document.querySelectorAll(".letter-photo-frame");

const floatingLayer = document.getElementById("floating-layer");

nameDisplay.textContent = customName;

let isOpen = false;

// ======== BUTTON HANDLER ========

openLetterBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    openLetterBtn.textContent = "Close love letter 💜";
    letter.classList.add("open");
    revealLinesSequentially();
    revealPhotoStories();
    revealLetterPhotos();
    burstFloatingItems();
  } else {
    openLetterBtn.textContent = "Open your love letter 💌";
    letter.classList.remove("open");
    // reset visibility
    lines.forEach((line) => line.classList.remove("visible"));
    photoStories.forEach((box) => box.classList.remove("visible"));
    letterPhotos.forEach((box) => box.classList.remove("visible"));
  }
});

// ======== LETTER ANIMATIONS ========

function revealLinesSequentially() {
  lines.forEach((line, index) => {
    setTimeout(() => {
      if (isOpen) {
        line.classList.add("visible");
      }
    }, 280 * index);
  });
}

function revealPhotoStories() {
  photoStories.forEach((box, index) => {
    setTimeout(() => {
      if (isOpen) {
        box.classList.add("visible");
      }
    }, 320 * index);
  });
}

function revealLetterPhotos() {
  letterPhotos.forEach((box, index) => {
    setTimeout(() => {
      if (isOpen) {
        box.classList.add("visible");
      }
    }, 350 * index);
  });
}

// ======== FLOATING ICONS (HEARTS / STARS / NURSE) ========

function createFloatItem(x, y) {
  const elem = document.createElement("div");
  elem.classList.add("float-item");

  const symbols = ["💜", "🩺", "✨", "📋", "💉"];
  elem.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const startX = x ?? Math.random() * window.innerWidth;
  const startY = y ?? window.innerHeight - 50;

  elem.style.left = startX + "px";
  elem.style.top = startY + "px";

  const duration = 3.5 + Math.random() * 2;
  elem.style.animationDuration = duration + "s";

  floatingLayer.appendChild(elem);

  setTimeout(() => {
    elem.remove();
  }, duration * 1000);
}

function burstFloatingItems() {
  const rect = openLetterBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const offsetX = (Math.random() - 0.5) * 180;
      const offsetY = (Math.random() - 0.5) * 50;
      createFloatItem(centerX + offsetX, centerY + offsetY);
    }, i * 60);
  }
}

// gentle background float while open
setInterval(() => {
  if (!isOpen) return;
  createFloatItem();
}, 1100);
