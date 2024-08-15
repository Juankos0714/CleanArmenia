function obtenerTamanioSandwich() {
    let tamanio = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
    while (tamanio !== "pequeño" && tamanio !== "grande") {
        alert("Tamaño no válido. Por favor, elija pequeño o grande.");
        tamanio = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
    }
    return tamanio;
}

function obtenerPrecioBase(tamanio) {
    return tamanio === "pequeño" ? 6000 : 12000;
}

function preguntarPorAdicional(nombreAdicional) {
    return prompt(`¿Desea agregar ${nombreAdicional}? (si/no)`).toLowerCase() === "si";
}

function calcularPrecioTotal(tamanio, adicionales) {
    let precioTotal = obtenerPrecioBase(tamanio);
    if (adicionales.tieneTocineta) precioTotal += 3000;
    if (adicionales.tienePavo) precioTotal += 3000;
    if (adicionales.tieneQueso) precioTotal += 2500;
    return precioTotal;
}

function generarResumen(tamanio, adicionales, precioTotal) {
    let resumen = `Resumen del pedido:\nTamaño: ${tamanio} - $${obtenerPrecioBase(tamanio)}\n`;
    if (adicionales.tieneTocineta) resumen += "Tocineta - $3000\n";
    if (adicionales.tieneJalapeno) resumen += "Jalapeño - Gratis\n";
    if (adicionales.tienePavo) resumen += "Pavo - $3000\n";
    if (adicionales.tieneQueso) resumen += "Queso - $2500\n";
    resumen += `Total a pagar: $${precioTotal}`;
    return resumen;
}

function tomarPedido() {
    const tamanio = obtenerTamanioSandwich();
    const adicionales = {
        tieneTocineta: preguntarPorAdicional("tocineta"),
        tieneJalapeno: preguntarPorAdicional("jalapeño"),
        tienePavo: preguntarPorAdicional("pavo"),
        tieneQueso: preguntarPorAdicional("queso")
    };
    const precioTotal = calcularPrecioTotal(tamanio, adicionales);
    const resumen = generarResumen(tamanio, adicionales, precioTotal);
    alert(resumen);
}
tomarPedido()