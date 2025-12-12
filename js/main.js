// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Pon aquí tu número (código país + número)
    const phoneNumber = "5213312345678"; 

    const buttons = document.querySelectorAll('.btn-whatsapp');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = button.getAttribute('data-price');
            
            // Mensaje automático
            const message = `Hola 👋, me interesa pedir: *${product}* ($${price}). ¿Tienen disponible?`;
            
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });
});