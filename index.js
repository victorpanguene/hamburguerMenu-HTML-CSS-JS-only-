// Select the menu btn
const menuBtn = document.querySelector('.menu-button');

// Default menu state
let menuOpen = false;

// Controlling what is happening on the menu button
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
