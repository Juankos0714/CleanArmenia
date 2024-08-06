let tamanio = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
let precioTotal;
if (tamanio === "pequeño") {
    precioTotal = 6000;
} else if (tamanio === "grande") {
    precioTotal = 12000;
} else {
    alert("Tamaño no válido. Por favor, elija pequeño o grande.");
}

let tieneTocineta = false;
let tieneJalapeno = false;
let tienePavo = false;
let tieneQueso = false;

if (precioTotal) {
    let respuesta = prompt("¿Desea agregar tocineta? (si/no)").toLowerCase();
    if (respuesta === "si") {
        precioTotal += 3000;
        tieneTocineta = true;
    }

    respuesta = prompt("¿Desea agregar jalapeño? (si/no)").toLowerCase();
    if (respuesta === "si") {
        tieneJalapeno = true;
    }

    respuesta = prompt("¿Desea agregar pavo? (si/no)").toLowerCase();
    if (respuesta === "si") {
        precioTotal += 3000;
        tienePavo = true;
    }

    respuesta = prompt("¿Desea agregar queso? (si/no)").toLowerCase();
    if (respuesta === "si") {
        precioTotal += 2500;
        tieneQueso = true;
    }

    let resumen = "Resumen del pedido:\n" +
                  "Tamaño: " + tamanio + " - $" + (tamanio === "pequeño" ? "6000" : "12000") + "\n";
    
    if (tieneTocineta) resumen += "Tocineta - $3000\n";
    if (tieneJalapeno) resumen += "Jalapeño - Gratis\n";
    if (tienePavo) resumen += "Pavo - $3000\n";
    if (tieneQueso) resumen += "Queso - $2500\n";
    
    resumen += "Total a pagar: $" + precioTotal;
    
    alert(resumen);
}