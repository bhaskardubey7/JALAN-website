 
// JavaScript to handle auto-typing effect
const placeholderTexts = [
    "Search for diamond rings...",
    "Explore gold necklaces...",
    "Find silver bracelets...",
    "Discover platinum earrings...",
    "Engagement rings await you..."
];

let currentIndex = 0;
const searchInput = document.getElementById("auto-type-search-input");

function typeEffect() {
    searchInput.placeholder = placeholderTexts[currentIndex];
    currentIndex = (currentIndex + 1) % placeholderTexts.length; // Loop through placeholder texts
}



// Cycle placeholder texts every 3 seconds
setInterval(typeEffect, 3000);

function closeOffer() {
    const offerBox = document.querySelector('.floating-offer');
    offerBox.style.opacity = '0';
    offerBox.style.transform = 'translateY(50px)';
    setTimeout(() => {
        offerBox.style.display = 'none';  // Hide the box after the animation
    }, 300);  // Match the time of the animation for smooth transition


    
 
}
// Select elements
const filterToggle = document.querySelector('.filter-toggle');
const filterSection = document.querySelector('.filter-section');

// Toggle visibility of the filter section
filterToggle.addEventListener('click', () => {
    filterSection.classList.toggle('hidden');
    filterSection.classList.toggle('visible');
});


// Update price range dynamically
const priceInput = document.getElementById('price');
const priceOutput = document.getElementById('price-output');

priceInput.addEventListener('input', () => {
    const value = priceInput.value;
    priceOutput.textContent = `₹1000 - ₹${value}`;
});

// Form submission handler
document.getElementById('filter-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    const filters = {
        type: document.getElementById('type').value,
        weight: document.getElementById('weight').value,
        price: priceInput.value,
    };
    console.log('Filters applied:', filters);
});
const scrollWrapper = document.querySelector('.scroll-wrapper');

// Pause animation on hover
scrollWrapper.addEventListener('mouseenter', () => {
    scrollWrapper.style.animationPlayState = 'paused';
});

// Resume animation on mouse leave
scrollWrapper.addEventListener('mouseleave', () => {
    scrollWrapper.style.animationPlayState = 'running';
});
 function toggleFullScreen(button) {
  const videoElement = button.previousElementSibling; // Target the video element

  if (!document.fullscreenElement) {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen(); // Safari compatibility
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen(); // IE/Edge compatibility
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

  
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Hide all slides
    if (i === index) slide.classList.add('active'); // Show current slide
  });

  // Play video only in the active slide, reset others
  slides.forEach((slide, i) => {
    const video = slide.querySelector('video');
    if (video) {
      if (i === index) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0; // Reset video time
      }
    }
  });
}

// Function to automatically move to the next slide
function autoSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; // Loop back to 0 after last slide
  showSlide(currentSlide);
}

// Initialize the carousel and set interval
showSlide(currentSlide);
setInterval(autoSlide, 5000); // Change slide every 5 seconds
