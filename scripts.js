const icon = document.getElementById("theme-button");
const body = document.body;

const setTheme = (theme) => {
   body.className = theme;
   if (theme == "light") {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
   } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
   }
   localStorage.theme = body.className;
};

const toggleTheme = () => {
   setTheme(localStorage.theme == "light" ? "dark" : "light")
}

if (localStorage.theme) {
   setTheme(localStorage.theme);
   // https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
   setTheme("dark");
} else {
   setTheme("light");
}


const tooltips = document.querySelectorAll("[data-tool-tip]");

const addTabIndexes = () => {
   Array.from(tooltips).forEach(function (link) {
      link.setAttribute("tabindex", "0");
   });
};

addTabIndexes();
