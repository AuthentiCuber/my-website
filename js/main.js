const icon = document.getElementsByClassName("fa-moon")[0];
const body = document.body;

const setTheme = (theme) => {
   body.className = theme;
   if (theme == "light") {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
   } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
   }
   localStorage.theme = body.className;
};

const toggleTheme = () => {
   setTheme(localStorage.theme == "light" ? "dark" : "light");
};

setTheme(body.className);

const tooltips = document.querySelectorAll("[data-tool-tip]");

const addTabIndexes = () => {
   Array.from(tooltips).forEach(function (tooltip) {
      tooltip.setAttribute("tabindex", "0");
   });
};

addTabIndexes();
