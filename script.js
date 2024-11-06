// script.js

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.close');

  // Handle Save button clicks
  grid.addEventListener('click', (e) => {
    if (e.target.classList.contains('save-btn')) {
      const button = e.target;
      const isSaved = button.getAttribute('data-saved') === 'true';

      if (isSaved) {
        // If already saved, unsave it
        button.textContent = 'Save';
        button.style.backgroundColor = '#ff595e';
        button.setAttribute('data-saved', 'false');
        alert('Image unsaved!');
      } else {
        // If not saved, save it
        button.textContent = 'Saved';
        button.style.backgroundColor = '#4CAF50';
        button.setAttribute('data-saved', 'true');
        alert('Image saved!');
      }
    }
  });

  // Image click event to show modal
  grid.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      modal.style.display = 'flex';
      modalImg.src = e.target.src;
    }
  });

  // Close modal
  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  // Infinite scroll
  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      loadMoreImages();
    }
  });

  function loadMoreImages() {
    for (let i = 0; i < 10; i++) {
      const newItem = document.createElement('div');
      newItem.classList.add('grid-item');
      newItem.innerHTML = `<img src="https://source.unsplash.com/random/300x${Math.floor(
        300 + Math.random() * 300
      )}" alt="Sample Image"><button class="save-btn" data-saved="false">Save</button>`;
      grid.appendChild(newItem);
    }
  }
});
