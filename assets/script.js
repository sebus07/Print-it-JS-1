function updateDots() {

    for (let index = 0; index < dots.length; index++) {
        const dot = dots[index];
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    }
}
