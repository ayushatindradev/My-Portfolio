// Smooth scrolling functionality for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust offset for sticky navbar
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Optional: Log dropdown interactions
  const dropdown = document.querySelector('.dropdown');
  dropdown.addEventListener('mouseenter', () => console.log('Dropdown hovered'));
  dropdown.addEventListener('click', () => console.log('Dropdown clicked'));
  