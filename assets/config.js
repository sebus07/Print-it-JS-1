const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let slidesZoneImg = document.querySelector(".banner-img");
console.log(slidesZoneImg);

let tagLine = document.querySelector("#banner p");
console.log(tagLine);

let currentIndex = 0;

let clicZoneRight = document.querySelector(".clic-right");
console.log(clicZoneRight);

let clicZoneLeft = document.querySelector(".clic-left");
console.log(clicZoneLeft);

let dotsContainer = document.querySelector(".dots-container");
console.log(dotsContainer);

let dots = dotsContainer.querySelectorAll('.dot');
console.log(dots);

clicZoneRight.addEventListener("click", () => {
    // Mettre à jour l'index de la diapositive avec prise en compte des valeurs négatives
    currentIndex = (currentIndex + 1) % slides.length;

    // Mettre à jour l'image et le texte et le dots par la fonction
    slidesZoneImg.setAttribute("src", `./assets/images/slideshow/${slides[currentIndex].image}`);
    tagLine.innerHTML = slides[currentIndex].tagLine;
    updateDots();
});

clicZoneLeft.addEventListener("click", () => {
    // Mettre à jour l'index de la diapositive avec prise en compte des valeurs négatives
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    // Mettre à jour l'image et le texte et le dots par la fonction
    slidesZoneImg.setAttribute("src", `./assets/images/slideshow/${slides[currentIndex].image}`);
    tagLine.innerHTML = slides[currentIndex].tagLine;
    updateDots();
});