const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("options");
const menuDiv = document.querySelectorAll(".options div");
const openBtn = document.getElementById("open-btn");
const section1 = document.getElementById("section-1");
const send = document.getElementById("send-btn");

closeBtn.addEventListener("click", () => {
    menu.style.right = "-350px";
});

openBtn.addEventListener("click", () => {
    menu.style.right = "0"
});

document.addEventListener("scroll", () => {
    menu.style.right = "-350px"
});

section1.addEventListener("click", () => {
    menu.style.right = "-350px"
});