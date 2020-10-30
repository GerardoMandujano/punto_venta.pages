//validarformulario
var precio = document.getElementById("precio");
precio.addEventListener("input", function(event) {
    if (precio.validity) {
        precio.setCustomValidity("Por favor ingresa un valor numerico");
    } else {
        precio.setCustomValidity("");
    }
})