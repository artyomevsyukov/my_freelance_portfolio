const btnDarkMode = document.querySelector(".dark-mode-btn");

//Проверка темной темы в localStorage
if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}
// else if (localStorage.getItem("darkMode") === "light") {
//   btnDarkMode.classList.add("dark-mode-btn--active");
//   document.body.add("light");
// }

//Проверка системной темы

//Включение ночного режима по кнопки
btnDarkMode.onclick = function () {
  //   console.log("Click");
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};
