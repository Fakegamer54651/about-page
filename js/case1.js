// Toyota Case Study - Image Modal Functionality & GSAP Scroll Animations

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get modal elements
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  
  // Get all clickable images
  const images = document.querySelectorAll('.hero-image-top img, .hero-image-bottom img, .section-image img, .section-images-grid img, .interactions-grid img');
  
  // Add click event listener to each image (excluding the Toyota company image)
  images.forEach(function(img) {
    img.addEventListener('click', function() {
      // Don't open modal for the Toyota company image (4.webp)
      if (this.src.includes('4.webp')) {
        return;
      }
      openModal(this.src, this.alt);
    });
  });
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
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

// Function to open modal with animation
function openModal(imageSrc, imageAlt) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  modal.style.display = 'block';
  
  // Trigger animation
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
}

// Function to close modal with animation
function closeModal() {
  const modal = document.getElementById('imageModal');
  
  modal.classList.remove('show');
  
  // Hide modal after animation completes
  setTimeout(() => {
    modal.style.display = 'none';
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }, 300);
}

// GSAP Scroll animations initialization - Optimized for performance
function initGSAPScrollAnimations() {
  // Set initial states for all images
  gsap.set('.hero-image-top img, .hero-image-bottom img, .section-image img', { 
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
      
      // Animate hero images
      gsap.to('.hero-image-top img, .hero-image-bottom img', {
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
        // Animate section images
        const sectionImages = section.querySelectorAll('.section-image img, .section-images-grid img, .interactions-grid img');
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
        
        // Fade out individual elements
        const elementsToFade = document.querySelectorAll('.case-hero, .case-section, .nav-bar, .case-title, .case-description, .hero-images, .section-image, .section-images-grid, .interactions-grid');
        
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
