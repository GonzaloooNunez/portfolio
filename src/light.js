document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const sunIconSrc = "public/sun.png";
  const moonIconSrc = "public/moon.png";

  // Verificar si hay una preferencia guardada en localStorage
  if (localStorage.getItem("theme") === "light-mode") {
    document.body.classList.add("light-mode");
    themeIcon.src = moonIconSrc;
    themeIcon.alt = "Modo Nocturno";
  } else {
    document.body.classList.remove("light-mode");
    themeIcon.src = sunIconSrc;
    themeIcon.alt = "Modo Diurno";
  }

  themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      themeIcon.src = moonIconSrc;
      themeIcon.alt = "Modo Nocturno";
      localStorage.setItem("theme", "light-mode");
    } else {
      themeIcon.src = sunIconSrc;
      themeIcon.alt = "Modo Diurno";
      localStorage.removeItem("theme");
    }
  });
});
