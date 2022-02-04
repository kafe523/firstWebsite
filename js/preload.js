/* Loader */
var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}

function appearLoad(){
    loader.classList.remove("disppear");
    loader.classList.add("appear");
};