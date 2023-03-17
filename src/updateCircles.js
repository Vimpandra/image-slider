function updateCircles() {
    const onDisplay = document.getElementById('onDisplay');

    const circle1 = document.getElementById('circle1');
    const circle2 = document.getElementById('circle2');
    const circle3 = document.getElementById('circle3');

    if (onDisplay.textContent === 'slide1') {
        circle1.classList.add('active');
        circle2.classList.remove('active');
        circle3.classList.remove('active');
    } else if (onDisplay.textContent === 'slide2') {
        circle1.classList.remove('active');
        circle2.classList.add('active');
        circle3.classList.remove('active');
    } else if (onDisplay.textContent === 'slide3') {
        circle1.classList.remove('active');
        circle2.classList.remove('active');
        circle3.classList.add('active');
    }
};

export { updateCircles };