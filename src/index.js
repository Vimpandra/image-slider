import { goNextSlide } from "./goNextSlide";
import { goPreviousSlide } from "./goPreviousSlide";
import { updateCircles } from "./updateCircles";
import { goSlide } from "./goSlide";

let autoSliding = setInterval(goNextSlide, 5000);

const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

arrowLeft.addEventListener('click', () => {
    goPreviousSlide();
    clearInterval(autoSliding);
    autoSliding = setInterval(goNextSlide, 5000);
    updateCircles();
});

arrowRight.addEventListener('click', () => {
    goNextSlide();
    clearInterval(autoSliding);
    autoSliding = setInterval(goNextSlide, 5000);
    updateCircles();
});

const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');

circle1.addEventListener('click', () => {
    goSlide(1);
    clearInterval(autoSliding);
    autoSliding = setInterval(goNextSlide, 5000);
});
circle2.addEventListener('click', () => {
    goSlide(2);
    clearInterval(autoSliding);
    autoSliding = setInterval(goNextSlide, 5000);
});
circle3.addEventListener('click', () => {
    goSlide(3);
    clearInterval(autoSliding);
    autoSliding = setInterval(goNextSlide, 5000);
});