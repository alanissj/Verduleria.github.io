// Evento para fijar el menú al hacer scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav"); // selecciona la barra de navegación
  const caja = document.querySelector(".caja"); // referencia a la caja amarilla de arriba
  const body = document.body;

  // si se scrollea más que la altura de la caja, fija el nav
  if (window.scrollY >= caja.offsetHeight) {
    nav.classList.add("fixed");
    body.classList.add("nav-fixed-padding"); // agrega padding para no tapar contenido
  } else {
    nav.classList.remove("fixed");
    body.classList.remove("nav-fixed-padding");
  }
});

// Evento para el menú hamburguesa en pantallas chicas
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle"); // botón hamburguesa
  const menu = document.querySelector(".nav-menu"); // menú desplegable

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show"); // muestra u oculta menú
  });
});

// Carrito de compras
let cartCount = 0; // contador de elementos
const cartIcon = document.getElementById("cart-icon"); // icono carrito
const cartCountDisplay = document.getElementById("cart-count"); // contador visual
const cartPanel = document.getElementById("cart-panel"); // panel lateral
const cartItems = document.getElementById("cart-items"); // lista de productos

// Agregar productos al carrito
document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card"); // tarjeta de producto
    const name = productCard.querySelector("h3").textContent; // nombre producto
    const price = productCard.querySelector(".price").textContent; // precio producto

    const li = document.createElement("li");
    li.textContent = `${name} - ${price}`; // texto en el carrito
    cartItems.appendChild(li);

    cartCount++; // suma al contador
    cartCountDisplay.textContent = cartCount; // actualiza display
  });
});

// Mostrar / ocultar panel carrito
cartIcon.addEventListener("click", () => {
  cartPanel.classList.toggle("show");
});

// Vaciar carrito
const clearCartBtn = document.getElementById("clear-cart");
const checkoutBtn = document.getElementById("checkout");

clearCartBtn.addEventListener("click", () => {
  cartItems.innerHTML = ""; // borra lista
  cartCount = 0;
  cartCountDisplay.textContent = cartCount; // reinicia contador
});

// Finalizar compra (simple alerta)
checkoutBtn.addEventListener("click", () => {
  if (cartCount === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  alert("¡Gracias por tu compra! 🎉");
  cartItems.innerHTML = "";
  cartCount = 0;
  cartCountDisplay.textContent = cartCount;
  cartPanel.classList.remove("show");
});