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

// EJERCICIO Funciones

function TipoDeLvadora(){
    let tipoLava = Number(prompt("¿Que tipo de lavadoras deseas alquilar? Ingrese   1) Grandes 2) Pequeñas"));
    return tipoLava
}

const CantidadLav = Number(prompt("¿Cuantas lavadoras deseas alquilar?"));

function CostoPorHora(){
    let Horas = Number(prompt("¿Cuantas horas a desea alquilar?"));
    LavadoraGrade = 4000
    lavadoraPequeña = 3000
    return tipoLava * Horas
}
CostoPorHora()
function Descuento(){
    if(CantidadLav > 3){
        let descuento = CostoPorHora * 0.03;
        return costototal = CostoPorHora -= descuento;
    }else{
         return CostoPorHora
    }
}
function Principal(){
    alert(`Su tipo de lavadora es ${TipoDeLvadora} La cantidad que vas a alquilar es ${CantidadLav} y su costo total va a ser de ${Descuento}`)
}
Principal()
