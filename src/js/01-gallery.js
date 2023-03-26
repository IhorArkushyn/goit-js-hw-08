// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryContainer = document.querySelector('ul.gallery');
galleryContainer.style.listStyle = 'none';

function createGalleryMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
    )
    .join('');
}

const addGalleryMarcup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', addGalleryMarcup);

galleryContainer.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(event) {
  const isGalleryEl = event.target.classList.contains('gallery__image');

  event.preventDefault();

  if (!isGalleryEl) {
    return;
  }
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
