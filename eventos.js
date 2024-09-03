// document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('saludarBtn').addEventListener('click', function() {
        alert('¡Hola!');
    });
// });
document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('boton');
    container.addEventListener('click', function() {
        alert('¡Hola! Soy el div');
    });
});
