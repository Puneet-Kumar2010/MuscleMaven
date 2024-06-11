const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("options");
const openBtn = document.getElementById("open-btn");
const section1 = document.getElementById("section-1");

closeBtn.addEventListener("click", () => {
    menu.style.right = "-400px"
});

openBtn.addEventListener("click", () => {
    menu.style.right = "0"
});

document.addEventListener("scroll", () => {
    menu.style.right = "-400px"
});

section1.addEventListener("click", () => {
    menu.style.right = "-400px"
});