import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems)

gallery.addEventListener("click", openModal)

gallery.insertAdjacentHTML(("beforeend"), galleryMarkup)

// gallery.addEventListener("click", openModal)

// gallery.addEventListener("keydown", onEscCloseModal)

let originalImg

function createGalleryMarkup(items) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
    `
    }).join("")
}

function openModal(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return
    }
    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
}

console.log(galleryItems);
