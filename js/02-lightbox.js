import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems)

// gallery.addEventListener("click", openModal)

gallery.insertAdjacentHTML(("beforeend"), galleryMarkup)

function createGalleryMarkup(items) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
    `
    }).join("")
}

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

// function openModal(evt) {
//     evt.preventDefault();

//     if (!evt.target.classList.contains("gallery__image")) {
//         return
//     }
    
// }

