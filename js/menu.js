const menuIcon = document.getElementById('menu-icon');
const menuItem = document.getElementById('menu').children;
const nav = document.getElementById('nav-bar');
const BREAK_POINT = 992;
let menuOpen = false;

menuIcon.addEventListener('click', toggle);

for (let index of menuItem) {
  index.firstChild.addEventListener('click', toggle);
}

function toggle() {
  if (document.body.offsetWidth < BREAK_POINT) {
    const openIcon = menuIcon.children.item(0);
    const closeIcon = menuIcon.children.item(1);

    openIcon.classList.toggle('header__icon--hidden');
    openIcon.classList.toggle('header__icon--visible');

    closeIcon.classList.toggle('header__icon--hidden');
    closeIcon.classList.toggle('header__icon--visible');

    nav.classList.toggle('header__nav--active');
    menuOpen = !menuOpen;
  }
}

window.addEventListener('resize', () => {
  if (document.body.offsetWidth >= BREAK_POINT) {
    nav.classList.remove('header__nav--active');
  } else if (menuOpen) {
    nav.classList.add('header__nav--active');
  }
});
