
function validar_nombre() {
    var nombre= document.forms["formulario"]["nombre"].value;

    if (nombre == null || nombre == "") {
        alert("El nombre no puede estar en blanco");
        return false;

    }
}

function mayusculas() {
    var nombre = document.getElementById("Apodo");
    nombre.value = nombre.value.toUpperCase();
}

function minusculas() {
    var nombre = document.getElementById("otro");
    nombre.value = nombre.value.toLowerCase();
}

function numerico() {
    var telefono = document.getElementById("tel").value;
    if (isNaN(telefono)) {  
        alert("Error: solo se admiten numeros");
        return false;
    }
}

function change_color() {
    document.getElementById("opiniones").style.color = "green";
}

