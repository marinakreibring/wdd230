// script for navigation
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;
// script for copyright in footer
document.querySelector("#currYear").textContent = new Date().getFullYear();
document.querySelector("#updated").textContent = document.lastModified;