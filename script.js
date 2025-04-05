// Selecciona el formulario por su ID y agrega un evento al enviarlo
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    alert('¡Gracias por contactarnos! Te responderemos pronto.'); // Muestra un mensaje de confirmación
});