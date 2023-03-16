import { goNextSlide } from "./goNextSlide";
import { goPreviousSlide } from "./goPreviousSlide";

let autoSliding = setInterval(goNextSlide, 5000);

const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

arrowLeft.addEventListener('click', () => {
    goPreviousSlide();
    clearInterval(autoSliding);
    autoSliding = setInterval(goNextSlide, 5000);
});

arrowRight.addEventListener('click', () => {
    goNextSlide();
    clearInterval(autoSliding);
    autoSliding = setInterval(goNextSlide, 5000);
});