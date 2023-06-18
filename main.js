// Optional JavaScript code for any additional functionality

// Example: Open images in a lightbox when clicked
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    // Open the clicked image in a lightbox or any desired functionality
    console.log(`Clicked on ${image.src}`);
  });
});
