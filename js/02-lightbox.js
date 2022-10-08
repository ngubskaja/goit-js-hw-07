import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const paletteContainer = document.querySelector('.gallery');
const cardsMarkUp = createGalleryMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkUp);

paletteContainer.addEventListener('click', onPaletteContainerClick);


 function createGalleryMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
        `;
      })
      .join('');
      
  }

  function onPaletteContainerClick (evt){
    evt.preventDefault();

if(!evt.target.classList.contains('gallery__image')){
    return;
}
const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt", captionDelay:250});
// new SimpleLightbox('.gallery a', {animationSlide:true, captionsData:"alt", captionDelay:250});

  }

  