const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImage = (entry) => 
{
    const container = entry.target
    const imagen = container.firstChild;
    // debug    ger
    const url = imagen.dataset.src
    imagen.src = url

    loadedImages++;
    printLog();
    // desrigistra la imagen
    observer.unobserve(container);
} 

const observer = new IntersectionObserver((entries) =>{
    entries.filter(isIntersecting).forEach(loadImage)
});

export const registerImage = (imagen) => {
    observer.observe(imagen);
}