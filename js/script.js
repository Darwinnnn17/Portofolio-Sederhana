// ===== Toggle Active Class (sesuai CSS-mu) =====
const navbar = document.querySelector(".navbar");
const menu = document.querySelector("#menu-icon");

if (menu && navbar) {
  // Klik hamburger
  menu.onclick = () => {
    navbar.classList.toggle("active");
    // sinkron aria-expanded
    const expanded = navbar.classList.contains("active");
    menu.setAttribute("aria-expanded", expanded ? "true" : "false");
  };

  // Klik di luar untuk menutup
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.remove("active");
      menu.setAttribute("aria-expanded", "false");
    }
  });

  // Aksesibilitas: dukung keyboard (Enter/Space)
  menu.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      menu.click();
    }
  });
}
