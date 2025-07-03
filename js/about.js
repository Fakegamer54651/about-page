const paragraphs = document.querySelectorAll('.paragraph-block p');

function setFocusedParagraph() {
  let activeParagraph = null;

  paragraphs.forEach(p => {
    const rect = p.getBoundingClientRect();

    // Trigger if it's around the top
    if (rect.top >= 60 && rect.top <= 200) {
      activeParagraph = p;
    }
  });

  paragraphs.forEach(p => p.classList.remove('paragraph-focused'));
  if (activeParagraph) {
    activeParagraph.classList.add('paragraph-focused');
  }
}

// Run on scroll, resize
window.addEventListener('scroll', setFocusedParagraph);
window.addEventListener('resize', setFocusedParagraph);

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    setFocusedParagraph();
    setTimeout(setFocusedParagraph, 100); // extra safety
  }, 100);
});

// Run again on full window load just in case
window.addEventListener('load', () => {
  setTimeout(setFocusedParagraph, 100);
});


function revealOnScroll(elements, rootMargin = '0px') {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { rootMargin });

  elements.forEach(el => observer.observe(el));
}

// Apply it to fade-in elements
document.addEventListener('DOMContentLoaded', () => {
  const fadeIns = document.querySelectorAll('.fade-in-up');
  revealOnScroll(fadeIns, '0px 0px -20% 0px');
});







// ******************* Home page

document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll(document.querySelectorAll('.fade-in-up'), '0px 0px -20% 0px');
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.hero-card').forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('card-final-' + (i + 1));
    }, 1000 + (i * 100));
  });
});

// Page Transition System - Only for page exit
function initPageTransitions() {
  // Ensure page starts from top
  window.scrollTo(0, 0);
  
  // Handle navigation links
  const navLinks = document.querySelectorAll('a[href]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle internal links (not external, mailto, or hash links)
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('http')) {
        e.preventDefault();
        
        // Show overlay
        const overlay = document.querySelector('.page-transition-overlay');
        overlay.classList.add('active');
        
        // Fade out individual elements
        const elementsToFade = document.querySelectorAll('.close-button, .about-section, .projects-section, .contact-section, .paragraph-block, .project-list, .contacts');
        
        gsap.to(elementsToFade, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          stagger: 0.02,
          onComplete: () => {
            // Navigate to new page
            window.location.href = href;
          }
        });
      }
    });
  });
}

// Initialize page transitions on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
});
