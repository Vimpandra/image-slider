function autoSliding(onDisplay) {
    setTimeout(changeSlide, 5000);

    function changeSlide() {
        const slide1 = document.getElementById('slide1');
        const slide2 = document.getElementById('slide2');
        const slide3 = document.getElementById('slide3');

        if (onDisplay === 'slide1') {
            slide1.style.left = '-100vw';
            slide2.style.left = '0';
            slide3.style.left = '100vw';
            onDisplay = 'slide2';
        } else if (onDisplay === 'slide2') {
            slide1.style.left = '-200vw';
            slide2.style.left = '-100vw';
            slide3.style.left = '0';
            onDisplay = 'slide3';
        } else if (onDisplay === 'slide3') {
            slide1.style.left = '0';
            slide2.style.left = '100vw';
            slide3.style.left = '200vw';
            onDisplay = 'slide1';
        }
        setTimeout(changeSlide, 5000);
    }
}

export { autoSliding };