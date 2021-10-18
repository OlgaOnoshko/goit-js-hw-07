import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems)

gallery.insertAdjacentHTML(("beforeend"), galleryMarkup)

gallery.addEventListener("click", openModal)

gallery.addEventListener("keydown", onEscCloseModal)

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

    if (!evt.target.classList.contains("gallery__image")) {
        return
    }

    originalImg = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `
        // ,
        //     {
        //     closable: false
        // }
    )

    originalImg.show()

    // console.log(evt.target.src)
}

function onEscCloseModal(evt) {
    // console.log(evt.code)
    if (evt.code !== "Escape") {
        return
    }
    originalImg.close()
}


console.log(galleryItems);



