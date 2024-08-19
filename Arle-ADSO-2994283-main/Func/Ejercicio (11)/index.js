function diagnostico() {
    let emitePitido = prompt("¿La computadora emite un pitido al iniciarse? (si/no)").toLowerCase();
let discoGira = prompt("¿El disco duro gira? (si/no)").toLowerCase();
}

function mostrarDiagnostico() {
    let mensaje;

if (emitePitido === "si") {
    if (discoGira === "si") {
        mensaje = "Póngase en contacto con el técnico de apoyo.";
    } else {
        mensaje = "Verificar contactos de la unidad.";
    }
} else {
    if (discoGira === "si") {
        mensaje = "Compruebe las conexiones de altavoces.";
    } else {
        mensaje = "Traiga la computadora para repararla en la central.";
    }
}

alert("Diagnóstico: " + mensaje);
}
function emepzarDiagnostico(){
    diagnostico();
    mostrarDiagnostico();
}
emepzarDiagnostico()
