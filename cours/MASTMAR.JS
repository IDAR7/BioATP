document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".faculty-header");

  headers.forEach((header) => {
    header.addEventListener("click", function (e) {
      // Empêche tout scroll automatique sur clic
      e.preventDefault();

      const contentId = header.getAttribute("aria-controls");
      const content = document.getElementById(contentId);
      const expanded = header.getAttribute("aria-expanded") === "true";

      // Fermer tous les autres panels
      document.querySelectorAll(".faculty-content").forEach((panel) => {
        if (panel !== content) {
          panel.setAttribute("hidden", true);
        }
      });

      document.querySelectorAll(".faculty-header").forEach((hdr) => {
        if (hdr !== header) {
          hdr.setAttribute("aria-expanded", "false");
        }
      });

      // Toggle du panel actuel
      if (expanded) {
        header.setAttribute("aria-expanded", "false");
        content.setAttribute("hidden", true);
      } else {
        header.setAttribute("aria-expanded", "true");
        content.removeAttribute("hidden");
        // Empêche de scroller automatiquement
        window.scrollTo({ top: window.scrollY, behavior: "instant" });
      }
    });
  });

  // Bouton retour haut
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", function () {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
