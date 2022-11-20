import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const card = createGalleryMarcup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', card);
console.log(createGalleryMarcup(galleryItems));

function createGalleryMarcup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => 
      
      `<div class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </div>`
     ).join('');
}

galleryContainer.addEventListener('click', onShowModal);


function onShowModal (evt){
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') return;

  const instanse = basicLightbox.create(`
     <div class="modal">
     <img class="original_img" src="${evt.target.getAttribute('data-source')}">
    </div>
`,
 {
  onShow : (instanse) => {
    document.addEventListener('keydown', onClose);
  },
  onClose : (instanse) => {
    document.removeEventListener('keydown', onClose);
  }
 } 
);
 function onClose(e){
  if(e.code === 'Escape'){
    e.preventDefault();
    instanse.close();

  }
 }
 instanse.show();
}
