// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galeryGard = galleryItems.map(createGalleryItem).join("");
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", galeryGard);


function createGalleryItem({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});