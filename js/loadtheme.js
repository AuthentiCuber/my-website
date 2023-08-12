if (localStorage.theme) {
   document.body.className = localStorage.theme;
   // https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
   document.body.className = "dark";
} else {
   document.body.className = "light";
}