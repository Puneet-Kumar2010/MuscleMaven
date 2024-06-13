const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("options");
const menuDiv = document.querySelectorAll(".options div");
const openBtn = document.getElementById("open-btn");
const section1 = document.getElementById("section-1");
const content = document.getElementById("message");
const mail = document.getElementById("mail-content");

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

content.addEventListener("input", ()=>{
    mail.value = content.value;
});

setInterval(()=>{
    mail.value = content.value;
}, 1);