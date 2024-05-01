//hambtn
const hb = document.getElementById("hamButton");

hb.addEventListener('click', () => {
    document.querySelector('#primaryNav').classList.toggle('open')
});

//swiper
const swiper = new swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'slide',
    speed: 2000, 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // start Autoplay
    autoplay: {
        delay: 5000,
    },
  });

// inject current year in folder
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

