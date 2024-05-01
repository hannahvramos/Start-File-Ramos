//toggle 
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
}
const x = document.getElementById("hamButton");

//x.onclick = toggleMenu;

//animate ham button
const hb = document.querySelector('#hamButton');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    pn.classList.toggle('open');
});

// inject current year in folder
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();
