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

// modal opening logic

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalClose = document.getElementById('modal-close');

  console.log('✅ DOM is ready');

  document.querySelectorAll('.featured-card-wrapper').forEach(card => {
    console.log('Found card:', card);
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      console.log('Card clicked:', projectId);
      modalIframe.src = `${projectId}.html`;
      modal.removeAttribute('hidden');
    });
  });

  modalClose.addEventListener('click', () => {
    console.log('Close button clicked');
    modal.setAttribute('hidden', true);
    modalIframe.src = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      console.log('Clicked outside iframe');
      modal.setAttribute('hidden', true);
      modalIframe.src = '';
    }
  });
});
