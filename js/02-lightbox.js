import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const card = createGalleryMarcup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', card);
console.log(createGalleryMarcup(galleryItems));

function createGalleryMarcup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => 
      
      `<div class="gallery__item">
      <a class="gallery__item" href="${original}">
        <img class="gallery__image"
         src="${preview}" 
         alt="${description}" />
      </a> 
     </div>`
     ).join('');
}

const gallery = new SimpleLightbox('ul.gallery a');

console.log(galleryItems);
