import { updateCircles } from "./updateCircles";

function goSlide(n) {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const slide3 = document.getElementById('slide3');

    const onDisplay = document.getElementById('onDisplay');

    if (n === 1) {
        slide1.style.left = '0';
        slide2.style.left = '100vw';
        slide3.style.left = '200vw';
        onDisplay.textContent = 'slide1';
    } else if (n === 2) {
        slide1.style.left = '-100vw';
        slide2.style.left = '0';
        slide3.style.left = '100vw';
        onDisplay.textContent = 'slide2';
    } else if (n === 3) {
        slide1.style.left = '-200vw';
        slide2.style.left = '-100vw';
        slide3.style.left = '0';
        onDisplay.textContent = 'slide3';
    }
    
    updateCircles();
}

export { goSlide };