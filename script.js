const myNav = document.getElementById("nav");
const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll(
  "ul.nav__list li.nav__item a.nav__link"
);

window.onscroll = function () {
  "use strict";
  let current = "";
  if (
    document.body.scrollTop >= 600 ||
    document.documentElement.scrollTop >= 600
  ) {
    myNav.classList.add("nav-scroll");
  } else {
    myNav.classList.remove("nav-scroll");
  }
  sections.forEach((section) => {
    const st = section.offsetTop;
    const sh = section.clientHeight;
    if (pageYOffset >= st - sh / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
