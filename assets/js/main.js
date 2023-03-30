// Menu Button
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".main-nav ul");
menuBtn.onclick = function () {
  menuBtn.classList.toggle("fa-times");
  navMenu.style.display != "flex"
    ? (navMenu.style.display = "flex")
    : (navMenu.style.display = "none");
};

// Contact Form
// const contactForm = document.querySelector(".contact form");
// contactForm.onsubmit = function (e) {
//   e.preventDefault();
//   alert("Message Delivered");
//   contactForm.reset();
// };
