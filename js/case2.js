// Breadly Case Study - Image Modal Functionality & GSAP Scroll Animations

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get modal elements
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  
  // Get all clickable images - updated selectors for case2
  const images = document.querySelectorAll('.hero-image-vertical img, .hero-image-horizontal img, .process-image-vertical img, .process-image-horizontal img, .section-image img');
  
  // Add click event listener to each image (excluding the 4th image - casetwofrom4.webp)
  images.forEach(function(img) {
    img.addEventListener('click', function() {
      // Don't open modal for the 4th image (casetwofrom4.webp)
      if (this.src.includes('casetwofrom4.webp')) {
        return;
      }
      openModal(this.src, this.alt);
    });
  });
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target.classList.contains('modal-content')) {
      closeModal();
    }
  });
  
  // Close modal with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
  
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Initialize GSAP scroll animations
  initGSAPScrollAnimations();
});

// Handle browser back/forward navigation to re-run animations
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    console.log('✅ Page restored from cache');
    // Page was restored from bfcache, re-run animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      // Reset any existing animations
      gsap.killTweensOf('*');
      ScrollTrigger.killAll();
      
      // Re-register plugin and initialize animations
      gsap.registerPlugin(ScrollTrigger);
      initGSAPScrollAnimations();
    }
  }
});

// Function to open modal with animation
function openModal(imageSrc, imageAlt) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  
  // Calculate scrollbar width to prevent page shifting
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  modal.style.display = 'block';
  
  // Trigger animation
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
  
  // Prevent body scroll and page shifting
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
}

// Function to close modal with animation
function closeModal() {
  const modal = document.getElementById('imageModal');
  
  modal.classList.remove('show');
  
  // Hide modal after animation completes
  setTimeout(() => {
    modal.style.display = 'none';
    // Restore body scroll and remove padding
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
  }, 300);
}

// GSAP Scroll animations initialization - Optimized for performance
function initGSAPScrollAnimations() {
  // Set initial states for all images - updated selectors for case2
  gsap.set('.hero-image-vertical img, .hero-image-horizontal img, .process-image-vertical img, .process-image-horizontal img, .section-image img', { 
    scale: 0.96, 
    opacity: 0 
  });
  
  // Set initial states for all text elements
  gsap.set('.case-title, .case-description, .section-title, .section-text, .results-list li', { 
    y: 20, 
    opacity: 0 
  });

  // Hero section animations - 20% faster
  ScrollTrigger.create({
    trigger: '.case-hero',
    start: 'top 80%',
    onEnter: () => {
      // Animate hero title and description
      gsap.to('.case-title', {
        y: 0,
        opacity: 1,
        duration: 0.32,
        ease: "power2.out"
      });
      
      gsap.to('.case-description', {
        y: 0,
        opacity: 1,
        duration: 0.32,
        ease: "power2.out",
        delay: 0.1
      });
      
      // Animate hero images - updated selectors for case2
      gsap.to('.hero-image-vertical img, .hero-image-horizontal img', {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.06,
        delay: 0.2
      });
    }
  });

  // Batch section animations for better performance
  const sections = document.querySelectorAll('.case-section');
  
  sections.forEach((section, sectionIndex) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 85%',
      onEnter: () => {
        // Animate section images - updated selectors for case2
        const sectionImages = section.querySelectorAll('.section-image img, .process-image-vertical img, .process-image-horizontal img');
        if (sectionImages.length > 0) {
          gsap.to(sectionImages, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.05
          });
        }
        
        // Animate section text elements
        const sectionTexts = section.querySelectorAll('.section-title, .section-text, .results-list li');
        if (sectionTexts.length > 0) {
          gsap.to(sectionTexts, {
            y: 0,
            opacity: 1,
            duration: 0.32,
            ease: "power2.out",
            stagger: 0.04,
            delay: 0.1
          });
        }
      }
    });
  });
}

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
        
        // Fade out individual elements - updated selectors for case2
        const elementsToFade = document.querySelectorAll('.case-hero, .case-section, .nav-bar, .case-title, .case-description, .hero-images, .section-image, .process-images');
        
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
