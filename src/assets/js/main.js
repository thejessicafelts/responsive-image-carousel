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
