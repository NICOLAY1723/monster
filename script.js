
let greenCan = document.querySelector(".producto1");
let yellowCan = document.querySelector(".producto2");
let blueCan = document.querySelector(".producto3");
let bodyStyle = document.querySelector("body");
let desing = document.querySelector(".imagen");
//Evento
blueCan.addEventListener('click', () => {
    desing.classList.remove("green");
    desing.classList.remove("yellow");
    desing.classList.add("blue");

    bodyStyle.classList.add("blue");
    bodyStyle.classList.remove("yellow");

})



greenCan.addEventListener("click", () => {

    desing.classList.remove("blue");
    bodyStyle.classList.remove("blue");
    desing.classList.remove("yellow");
    bodyStyle.classList.remove("yellow");


    desing.classList.add("green");
    bodyStyle.classList.add("green");


})

yellowCan.addEventListener("click", () => {

    desing.classList.remove("blue");
    bodyStyle.classList.remove("blue");
    bodyStyle.classList.remove("green");

    desing.classList.add("yellow");
    bodyStyle.classList.add("yellow");

})
