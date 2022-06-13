// Add imports above this line
// import SimpleLightbox from "SimpleLightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryImages = document.querySelector('.gallery');
const imageEl = galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__item" href='${original}'>
    <img class="gallery__image" src ='${preview}' alt ='${description}'/>
  </a>`;
}).join("");

galleryImages.insertAdjacentHTML("afterbegin", imageEl);

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 1000,
        captionsPosition: 'bottom',
    });
