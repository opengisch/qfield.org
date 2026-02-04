// Customer success stories interaction
document.addEventListener("DOMContentLoaded", function() {
  console.log("qfield.js loaded");
  const elCustomers = document.querySelector('#customers');
  
  if (elCustomers) {
    const customerLogos = elCustomers.querySelectorAll('.customer-logos img');
    
    customerLogos.forEach((elImg) => {
      // Add cursor pointer style
      elImg.style.cursor = 'pointer';
      
      elImg.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all customer elements
        elCustomers.querySelectorAll('.customer-active').forEach((el) => {
          el.classList.remove('customer-active');
        });
        
        // Add active class to clicked logo and corresponding elements
        const title = elImg.getAttribute('title');
        elCustomers.querySelectorAll(`[title="${title}"]`).forEach((el) => {
          el.classList.add('customer-active');
        });
      });
    });
  }
});
