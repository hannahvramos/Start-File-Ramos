function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
}
const x = document.getElementById("hamButton");

x.onclick = toggleMenu;

// inject current year in folder
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

//reviews
import { reviews } from '../js/reviews.js';
console.log(reviews);

//create card
const myTarget = document.querySelector("#reviews");

for (let x = 0; x < reviews.length; x++) {

    //create section
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name

    const myPara = document.createElement('p')
    myPara.textContent = reviews[x].text

    const myReview = document.createElement('div')

    for (let step = 0; step<reviews[x].stars; step++) {
        const myStar = document.createElement('img')
        myStar.src = "./images/star.svg"
        myReview.appendChild(myStar)
    }

    //build figure w child
    mySection.appendChild(myName);
    mySection.appendChild(myReview);
    mySection.appendChild(myPara);

    //new card
    myTarget.appendChild(mySection);
}