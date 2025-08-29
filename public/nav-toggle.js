document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");
  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      navList.classList.toggle("hidden");
      navList.classList.toggle("flex");
    });
  }
});
