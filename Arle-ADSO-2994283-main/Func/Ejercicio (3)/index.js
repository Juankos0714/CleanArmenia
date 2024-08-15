let lavadoraGrande = 4000;
let lavadoraPequeña = 3000;
let valorTotal = 0;
let lavadorasPrestadas = 0;

alert("Bienvenido al sistema de alquiler de lavadoras.");

let seleccionGrande = Number(prompt("¿Desea alquilar lavadoras grandes? Ingrese 1 para Sí, o cualquier otro número para No"));

if (seleccionGrande === 1) {
    let lavadorasGrandesPrestadas = Number(prompt("Ingrese el número de lavadoras grandes que necesita:"));
    valorTotal += lavadorasGrandesPrestadas * lavadoraGrande;
    lavadorasPrestadas += lavadorasGrandesPrestadas;
}

let seleccionPequena = Number(prompt("¿Desea alquilar lavadoras pequeñas? Ingrese 2 para Sí, o cualquier otro número para No"));

if (seleccionPequena === 2) {
    let lavadorasPequenasPrestadas = Number(prompt("Ingrese el número de lavadoras pequeñas que necesita:"));
    valorTotal += lavadorasPequenasPrestadas * lavadoraPequeña;
    lavadorasPrestadas += lavadorasPequenasPrestadas;
}

if (lavadorasPrestadas === 0) {
    alert("No ha seleccionado ninguna lavadora para alquilar.");
} else {
    if (lavadorasPrestadas > 3) {
        let descuento = valorTotal * 0.03;
        valorTotal -= descuento;
    }
    alert(`El valor total es ${valorTotal}`);
}

// Segunda parte: Funciones para el sistema de alquiler

function tipoDeLavadora() {
    return Number(prompt("¿Qué tipo de lavadoras deseas alquilar? Ingrese 1) Grandes 2) Pequeñas"));
}

function cantidadLavadoras() {
    return Number(prompt("¿Cuántas lavadoras deseas alquilar?"));
}

function costoPorHora(tipo, cantidad, horas) {
    let costoUnitario = tipo === 1 ? 4000 : 3000;
    return cantidad * costoUnitario * horas;
}

function aplicarDescuento(costo, cantidad) {
    if (cantidad > 3) {
        let descuento = costo * 0.03;
        return costo - descuento;
    }
    return costo;
}

function principal() {
    let tipo = tipoDeLavadora();
    let cantidad = cantidadLavadoras();
    let horas = Number(prompt("¿Cuántas horas desea alquilar?"));
    
    let costoTotal = costoPorHora(tipo, cantidad, horas);
    costoTotal = aplicarDescuento(costoTotal, cantidad);
    
    alert(`Su tipo de lavadora es ${tipo === 1 ? 'Grande' : 'Pequeña'}. 
La cantidad que va a alquilar es ${cantidad} y su costo total va a ser de ${costoTotal}`);
}

principal(); 