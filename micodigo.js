
function validar_nombre() {
    var nombre= document.forms["formulario"]["nombre"].value;

    if (nombre == null || nombre == "") {
        alert("El nombre no puede estar en blanco");
        return false;

    }
}

function validar_pass() {
    if ((document.getElementById("Contraseña").value.length < 4) ||
    (document.getElementById("Contraseña").value.length) > 20 ) {
        alert("la clave tiene que tener entre 4 y 20 caracteres")
    }
    else
        alert("Todo es correcto")
};