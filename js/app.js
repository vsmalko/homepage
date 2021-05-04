// Animation initialization
AOS.init();

// Preloader
const preload = document.querySelector(".preloader")
const main = document.querySelector("main")

preload.addEventListener("click", () =>{
    preload.classList.add("hide");
    preload.classList.remove("show");
    main.classList.remove("hide");
    main.classList.add("show");
})