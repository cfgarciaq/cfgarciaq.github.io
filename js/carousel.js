const carouselImages = document.getElementById('carouselImages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselDots = document.getElementById('carouselDots');
const images = carouselImages.querySelectorAll('img');
let currentIndex = 0;
const totalImages = images.length;
let autoSlideInterval;

// Function to update the carousel display
function showImage(index) {
    if (index >= totalImages) {
        currentIndex = 0; // Loop back to the first image
    } else if (index < 0) {
        currentIndex = totalImages - 1; // Loop to the last image
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100; // Calculate the offset for transform
    carouselImages.style.transform = `translateX(${offset}%)`;

    updateDots(); // Update active dot
}

// Function to create and update dots
function updateDots() {
    carouselDots.innerHTML = ''; // Clear existing dots
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => showImage(i));
        carouselDots.appendChild(dot);
    }
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    showImage(currentIndex - 1);
    resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
    showImage(currentIndex + 1);
    resetAutoSlide();
});

// Auto-slide functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showImage(currentIndex + 1);
    }, 3000); // Change image every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    showImage(0); // Show the first image
    startAutoSlide(); // Start auto-sliding
});

// Optional: Pause auto-slide on hover
carouselImages.addEventListener('mouseenter', stopAutoSlide);
carouselImages.addEventListener('mouseleave', startAutoSlide);