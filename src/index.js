import { registerImage } from "./lazy"

const maximun = 122
const minimun = 1

const random = () => Math.floor(Math.random() * (maximun * minimun )) + minimun
const createImageNdode = () => {
    

    const imagen = document.createElement('img')
    imagen.className = "mx-auto"
    imagen.width = "320"
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg` // todo

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";

    imageWrapper.appendChild(imagen);

    appendedImages++;
    printLog();

    return imageWrapper
}


const mountNode = document.getElementById("images");

const addButton = document.querySelector("#add");
const cleanButton = document.querySelector("#remove");

const addImage = () => {
    const newImage = createImageNdode()
    mountNode.append(newImage)
    registerImage(newImage)
}


const cleanImages = () => {

    console.log(mountNode.childNodes);

    [...mountNode.childNodes].forEach(child => {
        child.remove();
    }) 

}

addButton.addEventListener("click", addImage)
cleanButton.addEventListener("click", cleanImages)