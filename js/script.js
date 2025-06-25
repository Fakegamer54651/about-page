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
