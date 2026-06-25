/* ========================= */
/* SELECCIONAR ELEMENTOS */
/* ========================= */

const form = document.querySelector(".contact-form");

/* Seleccionamos usando la clase de CSS de forma única */
const statusMessage = document.querySelector(".status-message");


/* ========================= */
/* EVENTO SUBMIT */
/* ========================= */

form.addEventListener("submit", function(e){

    /* Evita recargar página */
    e.preventDefault();

    /* Mostrar mensaje */
    statusMessage.textContent = "Mensaje enviado correctamente 🚀";

    /* Mostrar mensaje oculto */
    statusMessage.style.display = "block";

    /* Limpiar formulario */
    form.reset();

    /* Ocultar mensaje después de 3 segundos */
    setTimeout(function(){
        statusMessage.style.display = "none";
    }, 3000);

});


/* ========================= */
/* EFECTO NAVBAR */
/* ========================= */

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#020617";
    } else {
        navbar.style.background = "#111827";
    }

});