import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const paletteContainer = document.querySelector('.gallery');
const cardsMarkUp = createGalleryMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkUp);

console.log(createGalleryMarkup(galleryItems));

paletteContainer.addEventListener('click', onPaletteContainerClick );


 function createGalleryMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>
        `;
      })
      .join('');
     
  }

let modalWindow;
let onCliskClose;
  function onPaletteContainerClick (evt){
    evt.preventDefault();

if(!evt.target.classList.contains('gallery__image')){
    return;
}
modalWindow = basicLightbox.create(
  ` <img src="${evt.target.dataset.source}"/>`
);
modalWindow.show(onCliskClose);

// document.div.classList.add('basicLightbox');
window.addEventListener('keydown', onEscapeClose);

  }

  function onEscapeClose (event){
    modalWindow.close();
  }



  
//   import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()