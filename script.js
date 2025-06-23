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

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});

let cartCount = 0;
const cartIcon = document.getElementById("cart-icon");
const cartCountDisplay = document.getElementById("cart-count");
const cartPanel = document.getElementById("cart-panel");
const cartItems = document.getElementById("cart-items");

// Agregar productos al carrito
document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");
    const name = productCard.querySelector("h3").textContent;
    const price = productCard.querySelector(".price").textContent;

    const li = document.createElement("li");
    li.textContent = `${name} - ${price}`;
    cartItems.appendChild(li);

    cartCount++;
    cartCountDisplay.textContent = cartCount;
  });
});

// Mostrar/Ocultar el panel del carrito
cartIcon.addEventListener("click", () => {
  cartPanel.classList.toggle("show");
});

const clearCartBtn = document.getElementById("clear-cart");
const checkoutBtn = document.getElementById("checkout");

// Vaciar el carrito
clearCartBtn.addEventListener("click", () => {
  cartItems.innerHTML = "";
  cartCount = 0;
  cartCountDisplay.textContent = cartCount;
});

// Finalizar compra
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
