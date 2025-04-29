// Obtenemos el elemento <nav> que queremos fijar cuando hacemos scroll
window.addEventListener("scroll", function () {
const nav = document.querySelector("nav");
const caja = document.querySelector(".caja");
const body = document.body;

if (window.scrollY >= caja.offsetHeight) {
    nav.classList.add("fixed");
    body.classList.add("nav-fixed-padding");
} else {
    nav.classList.remove("fixed");
    body.classList.remove("nav-fixed-padding");
}
});
