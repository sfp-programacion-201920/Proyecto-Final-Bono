
function validar_nombre() {
    var nombre= document.forms["formulario"]["nombre"].value;

    if (nombre == null || nombre == "") {
        alert("El nombre no puede estar en blanco");
        return false;

    }
}

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

function vacio(control) {
    control.value == "";
}
function verificar(control) {
    if (control.value == "")
        alert("debe ingresar datos");
}

