//hambtn
const hb = document.getElementById("hamButton");

hb.addEventListener('click', () => {
    document.querySelector('#primaryNav').classList.toggle('open')
});

// inject current year in folder
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

