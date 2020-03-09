
function validar_nombre() {
    var nombre = document.forms["formulario"]["nombre"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese el nombre");
        return false;
    };
    var nombre = document.forms["formulario"]["Apellidos"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese el Apellido");
        return false;
    };
    var nombre = document.forms["formulario"]["opiniones"].value;
    if (nombre == null || nombre == 0) {
        alert("Añada opiniones");
        return false;
    };
    var nombre = document.forms["formulario"]["Apodo"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese el Apodo");
        return false;
    };
    var nombre = document.forms["formulario"]["contrasena"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese la contraseña");
        return false;
    };
    var nombre = document.forms["formulario"]["edad"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese la edad");
        return false;
    };
};  






  
function validar_select() {
    indice = document.getElementById("opciones").value;
    if (indice == null || indice == 0) {
        alert("Escriba algo al menos");
        return false;
    };
};

function numerico() {
    var telefono = document.getElementById("tel").value;
    if (isNaN(telefono)) {  
        alert("Error: solo se admiten numeros");
        return false;
    }
}



