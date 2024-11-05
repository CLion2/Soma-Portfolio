document.addEventListener('DOMContentLoaded', function() {

  document.body.classList.add('modal-open');
  let closeButton = document.getElementById('close-button');

  // Close overlay on click or touch
  function closeOverlay() {
    document.getElementById('welcome-overlay').style.display = 'none';
    document.body.classList.remove('modal-open');

    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach((container, index) => {
      setTimeout(() => {
        container.classList.add('show');
      }, index * 500);
    });
  }

  closeButton.addEventListener('click', closeOverlay);
  closeButton.addEventListener('touchstart', closeOverlay);

});

