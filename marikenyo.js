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
