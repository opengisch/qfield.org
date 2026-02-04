// Gallery Lightbox
(function() {
  'use strict';
  
  let currentImageIndex = 0;
  let galleryImages = [];
  
  // Create lightbox HTML
  function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.id = 'gallery-lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-counter"></div>
      <span class="lightbox-close">&times;</span>
      <span class="lightbox-prev">&#10094;</span>
      <span class="lightbox-next">&#10095;</span>
      <div class="lightbox-content">
        <img class="lightbox-image" src="" alt="">
      </div>
      <div class="lightbox-caption"></div>
    `;
    document.body.appendChild(lightbox);
    return lightbox;
  }
  
  // Initialize gallery
  function initGallery() {
    const lightbox = createLightbox();
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxCounter = lightbox.querySelector('.lightbox-counter');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    // Find all gallery items
    const galleries = document.querySelectorAll('.gallery');
    
    galleries.forEach(gallery => {
      const items = gallery.querySelectorAll('.gallery-item');
      
      items.forEach((item, index) => {
        item.addEventListener('click', function() {
          // Get all images in this gallery
          galleryImages = Array.from(items).map(el => {
            const img = el.querySelector('img');
            const caption = el.querySelector('figcaption');
            return {
              src: img.src,
              alt: img.alt,
              caption: caption ? caption.textContent : ''
            };
          });
          
          currentImageIndex = index;
          showImage(currentImageIndex);
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
      });
    });
    
    // Close lightbox
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    
    // Previous image
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentImageIndex);
    });
    
    // Next image
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      showImage(currentImageIndex);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevBtn.click();
      } else if (e.key === 'ArrowRight') {
        nextBtn.click();
      }
    });
    
    // Show image
    function showImage(index) {
      const image = galleryImages[index];
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      
      if (image.caption) {
        lightboxCaption.textContent = image.caption;
        lightboxCaption.style.display = 'block';
      } else {
        lightboxCaption.style.display = 'none';
      }
      
      lightboxCounter.textContent = `${index + 1} / ${galleryImages.length}`;
      
      // Hide prev/next buttons if only one image
      if (galleryImages.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
      }
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
