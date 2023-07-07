// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  // Form submission handling
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Perform form submission handling here
        
        // Display success message
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Thank you for your message!';
        form.appendChild(successMessage);
        
        // Reset form fields
        form.reset();
      });
    }
  });
  