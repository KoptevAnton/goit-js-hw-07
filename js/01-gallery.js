import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Реалізація делегування та відкриття модального вікна
const modal = basicLightbox.create('<img src="" width="800" height="600">');
const galleryImages = document.querySelectorAll('.gallery__image');

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const originalImageSrc = event.target.dataset.source;
    modal.element().querySelector('img').src = originalImageSrc;
    modal.show();
  }
});

// Закриття модального вікна за допомогою клавіші Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.close();
  }
});

console.log(galleryItems);
