function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
  }
  
 // Get the header element
const header = document.getElementById("navbar");

// Add an event listener to monitor scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    // Add the "scrolled" class when the page is scrolled
    header.classList.add("scrolled");
  } else {
    // Remove the "scrolled" class when at the top of the page
    header.classList.remove("scrolled");
  }
});


function moveSlide(direction, carousel = null) {
  if (!carousel) {
    carousel = document.querySelector('.team-carousel');
  }
  
  const slides = carousel.querySelector('.team-slides');
  const cards = carousel.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 30; // width + gap
  const scrollPosition = slides.scrollLeft;
  
  if (window.innerWidth <= 768) {
    // Mobile behavior
    let targetScroll;
    
    if (direction === -1) {
      targetScroll = Math.max(scrollPosition - cardWidth, 0);
    } else {
      targetScroll = Math.min(scrollPosition + cardWidth, slides.scrollWidth - slides.clientWidth);
    }
    
    slides.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  } else {
    // Desktop behavior (optional - could just do nothing)
    if (direction === -1) {
      slides.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else {
      slides.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }
}

// Initialize carousels on load
document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.team-carousel');
  
  carousels.forEach(carousel => {
    const slides = carousel.querySelector('.team-slides');
    
    // Only enable touch swiping on mobile
    if (window.innerWidth <= 768) {
      let isDown = false;
      let startX;
      let scrollLeft;

      slides.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slides.offsetLeft;
        scrollLeft = slides.scrollLeft;
      });

      slides.addEventListener('mouseleave', () => {
        isDown = false;
      });

      slides.addEventListener('mouseup', () => {
        isDown = false;
      });

      slides.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slides.offsetLeft;
        const walk = (x - startX) * 2;
        slides.scrollLeft = scrollLeft - walk;
      });

      // Touch events for mobile
      slides.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slides.offsetLeft;
        scrollLeft = slides.scrollLeft;
      });

      slides.addEventListener('touchend', () => {
        isDown = false;
      });

      slides.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - slides.offsetLeft;
        const walk = (x - startX) * 2;
        slides.scrollLeft = scrollLeft - walk;
      });
    }
  });
});
