document.addEventListener('DOMContentLoaded', function () {
    // Initialize the slides with the 40x button and image active
    setActiveElements('volvox-40x', 'volvox-40x-btn');
    setActiveElements('cheek-40x', 'cheek-40x-btn');

    // Add click event listeners for each button
    setupSlideInteractions('volvox');
    setupSlideInteractions('cheek');
});

function setupSlideInteractions(slidePrefix) {
    const magnifications = ['40x', '100x', '400x'];
    magnifications.forEach(mag => {
        const buttonId = `${slidePrefix}-${mag}-btn`;
        document.getElementById(buttonId).addEventListener('click', function () {
            // Remove active class from all buttons and images in this slide
            magnifications.forEach(m => {
                removeActiveClass(`${slidePrefix}-${m}`, `${slidePrefix}-${m}-btn`);
            });
            // Set active class for clicked button and corresponding image
            setActiveElements(`${slidePrefix}-${mag}`, buttonId);
        });
    });
}

function setActiveElements(imageId, buttonId) {
    document.getElementById(imageId).classList.add('active');
    document.getElementById(buttonId).classList.add('active');
}

function removeActiveClass(imageId, buttonId) {
    document.getElementById(imageId).classList.remove('active');
    document.getElementById(buttonId).classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('#slideshow .slide-item');
    let currentSlide = 0;

    // Initialize the slideshow
    slides[currentSlide].classList.add('active-slide');
    slides[currentSlide].style.left = '0';
    updateDots(currentSlide); // Highlight the dot corresponding to the active slide

    function moveToNextSlide() {
        const nextSlide = (currentSlide + 1) % slides.length;

        // Position the next slide to the right of the current slide
        slides[nextSlide].style.left = '100%';
        slides[nextSlide].classList.add('active-slide');

        // Move both the current and next slides to the left
        slides[currentSlide].style.left = '-100%';
        slides[nextSlide].style.left = '0';

        // Wait for the transition to finish before cleaning up
        setTimeout(() => {
            slides[currentSlide].classList.remove('active-slide');
            slides[currentSlide].style.left = ''; // Reset the position
            currentSlide = nextSlide; // Update the current slide index
        }, 1000); // This duration should match the CSS transition duration
    }

    // Set an interval to automatically move to the next slide
    setInterval(moveToNextSlide, 10000); // Adjust time as needed
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('#slideshow .slide-item');
    const dots = document.querySelectorAll('.slideshow-controls .dot');
    const prevButton = document.querySelector('.slideshow-controls .prev');
    const nextButton = document.querySelector('.slideshow-controls .next');
    let currentSlide = 0;

    function showSlide(index) {
        const slideIndex = parseInt(index) % slides.length;

        slides[currentSlide].classList.remove('active-slide');
        slides[currentSlide].style.left = '-100%';
        slides[slideIndex].classList.add('active-slide');
        slides[slideIndex].style.left = '0';

        currentSlide = slideIndex;
        updateDots(slideIndex);
    }

    function updateDots(slideIndex) {
        dots.forEach((dot, index) => {
            if (index === slideIndex) {
                dot.classList.add('active-dot');
            } else {
                dot.classList.remove('active-dot');
            }
        });
    }

    function moveToNextSlide() {
        showSlide(currentSlide + 1);
    }

    function moveToPrevSlide() {
        showSlide(currentSlide - 1 + slides.length); // Adding slides.length before modulo ensures a positive index
    }

    prevButton.addEventListener('click', moveToPrevSlide);
    nextButton.addEventListener('click', moveToNextSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            showSlide(this.getAttribute('data-slide'));
        });
    });

    slides[currentSlide].classList.add('active-slide');
    slides[currentSlide].style.left = '0';
    updateDots(currentSlide);
});

