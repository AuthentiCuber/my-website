const icon = document.getElementById("theme-button");
const body = document.body;

const toggleTheme = () => {
   body.classList.toggle("dark");
   icon.classList.toggle("fa-moon");
   icon.classList.toggle("fa-sun");
};

// https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
   toggleTheme();
}

const links = document.getElementsByTagName("a");
const tooltips = document.querySelectorAll("[data-tool-tip]");

const addTabIndexes = () => {
   Array.from(links).concat(Array.from(tooltips)).forEach(function (link) {
      link.setAttribute("tabindex", "0");
   });
};

addTabIndexes();
