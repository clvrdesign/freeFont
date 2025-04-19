// toggle menu
document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = document.getElementById("toggleMenu");
  const menu = document.getElementById("menu");

  toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("-translate-y-[750px]");
    if (menu.classList.contains("-translate-y-[750px]")) {
      toggleMenu.innerHTML = '<i class="fi fi-rr-bars-staggered text-lg translate-y-0.5"></i>';
    } else {
      toggleMenu.innerHTML = '<i class="fi fi-rr-cross-small text-lg translate-y-0.5"></i>';
    }
  });
});

// copyright
document.addEventListener("DOMContentLoaded", () => {
  const copyright = document.getElementById("copyright");
  const year = new Date().getFullYear();
  copyright.innerHTML = year;
});

// faqs
document.querySelectorAll(".bg-white button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("clicked");
    const content = button.nextElementSibling;
    const icon = button.querySelector("span");

    // Toggle the max-height of the content
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Collapse
      icon.textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Expand
      icon.textContent = "-";
    }

    // Rotate the icon
    icon.classList.toggle("rotate-180");
  });
});

// Loader
window.addEventListener("load", function () {
  document.getElementById("loader").style.transition = "opacity 0.5s";
  document.getElementById("loader").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 500);
});


// Function to set the theme color dynamically
function setThemeColor(color) {
  let metaTag = document.querySelector('meta[name="theme-color"]');
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.name = 'theme-color';
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute('content', color);
}

// Set theme color based on Tailwind's custom primary color
document.addEventListener('DOMContentLoaded', () => {
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
  setThemeColor(primaryColor);
});


// Elements
const filterContainer = document.getElementById('filterContainer');
const caretBtn = document.getElementById('caretBtn'); // to close
const filterBtn = document.getElementById('filterBtn'); // to open
const overlay = document.getElementById('overlay');

// Open Filter
filterBtn.addEventListener('click', () => {
  filterContainer.classList.remove('-translate-x-[275px]');
  filterContainer.classList.add('translate-x-0');
  
  overlay.classList.remove('translate-x-[100%]');
  overlay.classList.add('translate-x-0');
  
  filterBtn.classList.add('hidden'); // hide open button
});

// Close Filter
caretBtn.addEventListener('click', () => {
  filterContainer.classList.remove('translate-x-0');
  filterContainer.classList.add('-translate-x-[275px]');
  
  overlay.classList.remove('translate-x-0');
  overlay.classList.add('translate-x-[100%]');
  
  filterBtn.classList.remove('hidden'); // show open button
});