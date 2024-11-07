// JavaScript to change the background image every few seconds
const header = document.getElementById('header');

// Array of background image URLs
const backgrounds = [
    '../Images/back1.png',
    '../Images/back2.png',
    '../Images/back3.png',
    '../Images/back4.png', // Add more images as needed
];

let currentBackground = 0;

// Function to change background
function changeBackground() {
    header.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
    currentBackground = (currentBackground + 1) % backgrounds.length; // Loop through the images
}

// Change background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);

// Initial background set on page load
changeBackground();
