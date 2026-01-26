// Simple lightbox for image gallery - no jQuery needed
(function() {
  'use strict';
  
  // Wait for page to fully load
  window.addEventListener('load', function() {
    console.log('Lightbox script loaded');
    
    // Check if gallery exists
    const gallery = document.querySelector('.image-gallery');
    if (!gallery) {
      console.log('No image gallery found');
      return;
    }
    
    // Create lightbox modal
    const modal = document.createElement('div');
    modal.className = 'lightbox';
    modal.innerHTML = '<span class="close">&times;</span><img alt="Enlarged image">';
    document.body.appendChild(modal);
    
    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.close');
    
    console.log('Lightbox modal created');
    
    // Get all images in gallery
    const images = gallery.querySelectorAll('img');
    console.log('Found ' + images.length + ' images');
    
    // Add click event to each image
    images.forEach(function(img) {
      img.addEventListener('click', function() {
        console.log('Image clicked!');
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
      });
    });
    
    // Close when clicking the X
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    // Close when clicking outside the image
    modal.addEventListener('click', function(e) {
      if (e.target === modal || e.target === modalImg) {
        modal.style.display = 'none';
      }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
      }
    });
  });
})();