const menuIcon = document.getElementById("menu-icon");
const menuItem = document.getElementById("menu").children;
const nav = document.getElementById("nav-bar");

menuIcon.addEventListener("click", toggle);

for (let index of menuItem) {
  index.firstChild.addEventListener("click", toggle);
}

function toggle() {
  if (document.body.offsetWidth < 1025) {
    const openIcon = menuIcon.children.item(0);
    const closeIcon = menuIcon.children.item(1);

    openIcon.classList.toggle("header__icon--hidden");
    openIcon.classList.toggle("header__icon--visible");

    closeIcon.classList.toggle("header__icon--hidden");
    closeIcon.classList.toggle("header__icon--visible");

    nav.classList.toggle("header__nav--active");
  }
}

window.addEventListener("resize", () => {
  if (document.body.offsetWidth > 1023) {
    nav.classList.remove("header__nav--active");
  }
});
