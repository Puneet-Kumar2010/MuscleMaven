const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("options");
const openBtn = document.getElementById("open-btn");
const section1 = document.getElementById("section-1");

closeBtn.addEventListener("click", () => {
    menu.style.right = "-350px";
    menu.style.display: "none";
});

openBtn.addEventListener("click", () => {
    menu.style.right = "0"
    menu.style.width = "350px";
    menu.style.display: "block";
});

document.addEventListener("scroll", () => {
    menu.style.right = "-350px"
    menu.style.display: "none";
});

section1.addEventListener("click", () => {
    menu.style.right = "-350px"
    menu.style.display: "none";
});
