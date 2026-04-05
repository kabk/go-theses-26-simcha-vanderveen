//const sections = document.querySelectorAll("h2[id], #note-0,#note-1,#note-2,#note-3,#note-4");
  const sections = document.querySelectorAll("h2[id], .note");
  const navLinks = document.querySelectorAll(".list .navigation");

  function highlightCurrentSection() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 100) { // Adjust the offset as needed
        currentSection = section.id;
      }
    });

    // Remove the 'active' class from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the 'active' class to the current link
    if (currentSection) {
      const currentLink = document.querySelector(`.list .navigation[href="#${currentSection}"]`);
      if (currentLink) {
        currentLink.classList.add("active");
      }
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", highlightCurrentSection);

  // Call the function once on page load
  highlightCurrentSection();

  const stickyNav = document.querySelector(".sticky-nav");
  const header = document.querySelector(".header");
  const main = document.querySelector("main");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = header.offsetHeight; // Height of the header
    const mainTop = main.offsetTop; // Top position of the main content area

    // Check if the user has scrolled past the header and into the main content area
    if (scrollTop > headerHeight && scrollTop >= mainTop) {
      // Scrolling up
      if (scrollTop < lastScrollTop) {
        stickyNav.classList.add("visible");
      } else {
        // Scrolling down
        stickyNav.classList.remove("visible");
      }
    } else {
      // User is in the header, hide the sticky nav
      stickyNav.classList.remove("visible");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Reset lastScrollTop at the top of the page
});

function addScrollpadding( ) {

  const bibliographyHeader = document.getElementById( 'bibliography' );
  const emailContainer = document.getElementById( 'email-container' );

  const spaceBetween = ( emailContainer.offsetTop + emailContainer.offsetHeight )
                     - bibliographyHeader.offsetTop;

  emailContainer.parentNode.style.paddingBottom = `${ window.innerHeight - spaceBetween }px`;
}

//
window.addEventListener("resize", addScrollpadding );
addScrollpadding( );
//

window.addEventListener("load", function () {
  document.getElementById("header").scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the header
});