import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems)

gallery.insertAdjacentHTML(("beforeend"), galleryMarkup)

gallery.addEventListener("click", openModal)

let originalImg

function createGalleryMarkup(items) {
    return galleryItems.map(({ preview, original, description }) => {
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
</div >
`
    }).join("")
}

function openModal(evt) {
    evt.preventDefault();

    const originalImgSrc = evt.target.dataset.source

    if (!evt.target.classList.contains("gallery__image")) {
        return
    }

    originalImg = basicLightbox.create(`
        <img src="${originalImgSrc}" width="800" height="600">
    `
    )

    gallery.addEventListener("keydown", onEscCloseModal)
    originalImg.show()
}

function onEscCloseModal(evt) {
    evt.preventDefault();
    
    if (evt.code !== "Escape") {
        return
    }

    gallery.removeEventListener("keydown", onEscCloseModal)
    originalImg.close()
}




