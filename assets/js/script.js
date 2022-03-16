// Menu Show
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

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  // Active Link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  // Remove Menu Mobile

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change Background Color

let element = document.getElementById("header-first");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    element.classList.add("header--animated");
  } else {
    element.classList.remove("header--animated");
  }
}
