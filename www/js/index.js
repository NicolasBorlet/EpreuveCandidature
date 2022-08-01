document.addEventListener("DOMContentLoaded", function () {
  !(function () {
    var e = document.querySelector(".navigation_burger");
    e.onclick = function () {
      document.querySelector(".navigation").classList.toggle("active");
    };
  })();
});
