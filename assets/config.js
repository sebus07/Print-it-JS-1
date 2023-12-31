let SlidesZoneImg = document.querySelector(".banner-img");
console.log(SlidesZoneImg);

let tagLine = document.querySelector("#banner p");
console.log(tagLine);

let currentIndex = 0;

let clicZoneRight = document.querySelector(".clic-right");
console.log(clicZoneRight);

let clicZoneLeft = document.querySelector(".clic-left");
console.log(clicZoneLeft);

let dotsContainer = document.querySelector(".dots-container");
console.log(dotsContainer);

clicZoneRight.addEventListener("click", () => {
    // Mettre à jour l'index de la diapositive
    currentIndex = (currentIndex + 1) % slides.length;

    // Mettre à jour l'image et le texte et le dots par la fonction
    SlidesZoneImg.setAttribute("src", `./assets/images/slideshow/${slides[currentIndex].image}`);
    tagLine.innerHTML = slides[currentIndex].tagLine;
    updateDots();
});

clicZoneLeft.addEventListener("click", () => {
    // Mettre à jour l'index de la diapositive avec prise en compte des valeurs négatives
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    // Mettre à jour l'image et le texte et le dots par la fonction
    SlidesZoneImg.setAttribute("src", `./assets/images/slideshow/${slides[currentIndex].image}`);
    tagLine.innerHTML = slides[currentIndex].tagLine;
    updateDots();
});

