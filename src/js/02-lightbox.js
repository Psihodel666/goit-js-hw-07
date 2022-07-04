import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imgConteiner = document.querySelector('.gallery');

const creatItem = (galleryItems) => {
    return galleryItems.map(({preview, original, description}) =>{
        return `
            
                <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>`
    }).join('');
};

imgConteiner.insertAdjacentHTML('beforeend', creatItem(galleryItems));

imgConteiner.addEventListener('click', openImg);
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
function openImg(e){
    e.preventDefault();
    const galleryImg = e.target.classList.contains('gallery__image');
    if(!galleryImg){
        return
    }
    const eventImg = e.target.dataset.source;

    
    imgConteiner.addEventListener('keydown', escapeFunction);
    function escapeFunction(e){
        if(e.code !== 'Escape'){
            return;
        }
       
           
        
    
        
        console.log(e.code)
    }
}