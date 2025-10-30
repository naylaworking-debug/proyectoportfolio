document.addEventListener("DOMContentLoaded", () => {
console.log("Página cargada correctamente.");

const form = document.querySelector(".contacto form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío para testear
    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefono = document.querySelector("#telefono").value.trim();
    const terminos = document.querySelector("#terminos").checked;

if (!nombre || !email || !telefono || !terminos) {
    alert("Por favor completa todos los campos y acepta los términos.");
    } else {
    alert("Formulario enviado correctamente.");
    form.reset();
    }
});


const enlaces = document.querySelectorAll('nav a[href^="#"]');
enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (event) => {
    event.preventDefault();
    const seccion = document.querySelector(enlace.getAttribute("href"));
    seccion.scrollIntoView({ behavior: "smooth" });
    });
});
});