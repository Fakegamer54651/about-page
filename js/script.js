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

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOM is ready');
  
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Initialize page transitions first
  initPageTransitions();
  
  // Initialize all GSAP animations
  initGSAPAnimations();
});

function initGSAPAnimations() {
  // Check if animations should be skipped (only after page transition has been initialized)
  const shouldSkipAnimations = sessionStorage.getItem('mainPageVisited') === 'true' && performance.navigation.type === 0;
  
  // Mobile detection - including 768px breakpoint
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;
  const isExtraSmallMobile = window.innerWidth <= 400;
  
  if (shouldSkipAnimations) {
    // Just set final states without animation
    gsap.set(['.hero-title', '.hero-subtitle'], { opacity: 1 });
    gsap.set('.featured-card', { y: 0, opacity: 1 });
    gsap.set('.ui-card', { scale: 1, opacity: 1 });
    gsap.set('.contact-link', { y: 0, opacity: 1 });
    const textElements = ['.featured-title', '.featured-description', '.ui-shots-title', '.contact-section h2', '.clients-label'];
    textElements.forEach(selector => {
      gsap.set(selector, { y: 0, opacity: 1 });
    });
    return; // Exit early, don't set up scroll animations
  }

  // Mobile animations use CSS animations, so we skip GSAP for mobile
  if (isMobile || isSmallMobile || isExtraSmallMobile) {
    console.log('Mobile detected, using CSS animations');
    return;
  }

  // Hero title and subtitle fade animations - 20% faster (Desktop only)
  gsap.set(['.hero-title', '.hero-subtitle'], { opacity: 0 });
  
  const heroTimeline = gsap.timeline();
  heroTimeline
    .to('.hero-title', { 
      opacity: 1, 
      duration: 0.8, 
      ease: "power2.out" 
    }, 0.15)
    .to('.hero-subtitle', { 
      opacity: 1, 
      duration: 0.8, 
      ease: "power2.out" 
    }, 0.45);

  // Featured cards - 20% faster with reduced stagger (Desktop only)
  gsap.set('.featured-card', { y: 30, opacity: 0 });
  
  ScrollTrigger.create({
    trigger: '.featured-section',
    start: 'top 80%',
    onEnter: () => {
      gsap.to('.featured-card', {
        y: 0,
        opacity: 1,
        duration: 0.64,
        ease: "power2.out",
        stagger: 0.12
      });
    }
  });

  // UI Cards - 20% faster (Desktop only)
  gsap.set('.ui-card', { scale: 0.96, opacity: 0 });
  
  ScrollTrigger.create({
    trigger: '.ui-shots-section',
    start: 'top 80%',
    onEnter: () => {
      gsap.to('.ui-card', {
        scale: 1,
        opacity: 1,
        duration: 0.64,
        ease: "power2.out",
        stagger: 0.08
      });
    }
  });

  // Text elements - 20% faster, reduced delays (Desktop only)
  const textElements = ['.featured-title', '.featured-description', '.ui-shots-title', '.contact-section h2', '.clients-label'];
  
  textElements.forEach((selector, index) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      gsap.set(element, { y: 20, opacity: 0 });
      
      ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            duration: 0.48,
            ease: "power2.out",
            delay: index * 0.06
          });
        }
      });
    });
  });

  // Contact links - 20% faster (Desktop only)
  gsap.set('.contact-link', { y: 20, opacity: 0 });
  
  ScrollTrigger.create({
    trigger: '.contact-section',
    start: 'top 80%',
    onEnter: () => {
      gsap.to('.contact-link', {
        y: 0,
        opacity: 1,
        duration: 0.48,
        ease: "power2.out",
        stagger: 0.08
      });
    }
  });
}

// Page caching system
// Page Transition System - Only for page exit
function initPageTransitions() {
  // Ensure page starts from top
  window.scrollTo(0, 0);
  
  // Mark page as visited
  sessionStorage.setItem('mainPageVisited', 'true');
  
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
        
        // Mobile detection for transitions
        const isMobile = window.innerWidth <= 768;
        const isSmallMobile = window.innerWidth <= 480;
        const isExtraSmallMobile = window.innerWidth <= 400;
        
        // Fade out individual elements with mobile-specific selectors
        let elementsToFade;
        if (isMobile || isSmallMobile || isExtraSmallMobile) {
          elementsToFade = document.querySelectorAll('.hero-section, .featured-section, .ui-shots-section, .contact-section, .nav-bar, .featured-card-wrapper, .ui-card-wrapper, .contact-link');
        } else {
          elementsToFade = document.querySelectorAll('.hero-section, .featured-section, .ui-shots-section, .contact-section, .nav-bar, .featured-card, .ui-card, .contact-link');
        }
        
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

// Handle window resize for responsive animations
function handleResize() {
  // Refresh ScrollTrigger on resize
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
  
  // Re-initialize animations if needed
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;
  const isExtraSmallMobile = window.innerWidth <= 400;
  
  if (isMobile || isSmallMobile || isExtraSmallMobile) {
    console.log('Switched to mobile view');
    // Kill existing GSAP animations for mobile
    gsap.killTweensOf('*');
    ScrollTrigger.killAll();
  }
}

// Add resize event listener
window.addEventListener('resize', handleResize);
