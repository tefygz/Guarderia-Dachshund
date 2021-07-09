const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.add-image');
const contenedorLight = document.querySelector('.image-light')
const closeLight = document.querySelector('.close')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        /* hamburguer.style.opacity = '1'; */
    }
})


const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    /* hamburguer.style.opacity = '0'; */
}