document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.createElement("div");
  hamburgerMenu.classList.add("hamburger-menu");
  hamburgerMenu.innerHTML = "☰";

  const header = document.querySelector(".header");
  const navigation = document.querySelector(".clicks");

  // Only add hamburger for mobile
  if (window.innerWidth <= 600) {
    header.insertBefore(hamburgerMenu, navigation);

    hamburgerMenu.addEventListener("click", function () {
      navigation.classList.toggle("mobile-nav-active");
      hamburgerMenu.classList.toggle("menu-open");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !navigation.contains(event.target) &&
      !hamburgerMenu.contains(event.target) &&
      navigation.classList.contains("mobile-nav-active")
    ) {
      navigation.classList.remove("mobile-nav-active");
      hamburgerMenu.classList.remove("menu-open");
    }
  });

  // Responsive form handling
  window.addEventListener("resize", function () {
    const propertyFormContainer = document.getElementById(
      "propertyFormContainer"
    );
    if (propertyFormContainer && window.innerWidth <= 600) {
      propertyFormContainer.style.width = "95%";
      propertyFormContainer.style.margin = "50px auto";
    }
  });
});
