function mostrarFormularionuevo() {
    var formulario = document.getElementById("formulario");
    if (formulario.style.display === "none") {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
}