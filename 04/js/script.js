function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById("hamButton");

x.onclick = toggleMenu;

// inject current year in folder
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();