
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const body = document.body;
const btnTheme = document.querySelector('#btn-theme');

// Add initial theme from localStorage or default to light
const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
const savedIcon = localStorage.getItem('portfolio-btn-theme') || 'fa-moon';

body.classList.add(savedTheme);
btnTheme.classList.add(savedIcon);

// Helper functions
const isDark = () => body.classList.contains('dark');

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem('portfolio-theme') || 'light');
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme') || 'fa-moon');

  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);

  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

const toggleTheme = () => {
  if (isDark()) {
    setTheme('light', 'fa-moon');
  } else {
    setTheme('dark', 'fa-sun');
  }
};

btnTheme.addEventListener('click', toggleTheme);

// code for animating text typing effect//
const phrases = [
    "Junior Software Developer...",
    "DevOps Engineer",
    "Cloud Enthusiast",
    "AWS Certified",
    "IT Graduate.."
  ];

  const el = document.getElementById("typing-text");
  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;

  function type() {
    const fullText = phrases[currentPhrase];
    
    if (isDeleting) {
      el.textContent = fullText.substring(0, currentChar--);
    } else {
      el.textContent = fullText.substring(0, currentChar++);
    }

    let speed = isDeleting ? 40 : 101;

    if (!isDeleting && currentChar === fullText.length + 1) {
      speed = 1400; // Pause at end
      isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      speed = 400; // Pause before the next word
    }

    setTimeout(type, speed);
  }

  type();

 // scroll up code
  const scrollUp = document.getElementById("scroll-up");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollUp.style.display = "block";
    } else {
      scrollUp.style.display = "none";
    }
  });