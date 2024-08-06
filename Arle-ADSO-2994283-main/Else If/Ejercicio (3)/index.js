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