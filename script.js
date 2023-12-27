var menu = document.querySelector(".menu");
var btn = document.querySelector(".mobile_btn");

btn.addEventListener('click', () => {
      menu.classList.toggle("active");
})