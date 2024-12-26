// Smooth Scroll Behavior
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    const targetId = this.getAttribute('href').substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Highlight Active Section on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section'); // Update with section containers
  const navLinks = document.querySelectorAll('.menu a');

  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}


// Get references to buttons and project cards
const buttons = document.querySelectorAll('.projects-buttons .btn');
const projectCards = document.querySelectorAll('.project-card');

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Reset all buttons to default color
        buttons.forEach(btn => btn.style.backgroundColor = 'lightblue'); // Default yellow
        buttons.forEach(btn => btn.style.color = 'black'); // Default text color

        // Change the clicked button's color to green
        button.style.backgroundColor = 'green';
        button.style.color = 'black';

        // Get the filter category from the button's id
        const filter = button.id;

        // Show/hide project cards based on the filter
        projectCards.forEach(card => {
            if (filter === 'all-btn') {
                card.style.display = 'block';
            } else if (
                (filter === 'da-btn' && (card.textContent.includes('Crowd Funding') || card.textContent.includes('Sales Dashboard'))) ||
                (filter === 'ds-btn' && (card.textContent.includes('IPL') || card.textContent.includes('House') || card.textContent.includes('Titanic'))) ||
                (filter === 'nlp-btn' && (card.textContent.includes('WhatsApp') || card.textContent.includes('Laptop')))
            ) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Set the default filter to "ALL"
document.getElementById('all-btn').click();
