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




//Nicolas

alert("Hola, bienvenido a nuestra página para alquilar lavadoras. El precio por hora será Grande: 4000, Pequeña: 3000");

//Lavadora escogida
function TipoDeLavadora(){
    let tipoLava = Number(prompt("¿Qué tipo de lavadoras deseas alquilar? Ingrese 1) Grandes 2) Pequeñas"));
    
    if(tipoLava == 1){
        return 'Grande';
    } else if(tipoLava == 2){
        return 'Pequeña';
    } else {
        return null;
    }
}

//Precio de la lavadora
function ValorLavadora(tipoDeLavadora){
    if(tipoDeLavadora === 'Grande'){
        return 4000;
    } else if(tipoDeLavadora === 'Pequeña'){
        return 3000;
    } else {
        return 0;
    }
}

//Cantidad de lavadoras
function CantidadLav(){
    return Number(prompt("¿Cuántas lavadoras deseas alquilar?"));
}

//Cuántas Horas
function HorasAlquiladas(){
    return Number(prompt("¿Durante cuántas horas las deseas alquilar?"));
}

//Descuento
function Descuento(valorLavadora, cantidadLav, horasAlquiladas){
    let costoTotal = valorLavadora * cantidadLav * horasAlquiladas;
    
    if(cantidadLav > 3){
        let descuento = costoTotal * 0.03;
        costoTotal -= descuento;
    }
    
    return costoTotal;
}

function Principal(){
    let tipo = TipoDeLavadora();
    let valor = ValorLavadora(tipo);
    let cantidad = CantidadLav();
    let horas = HorasAlquiladas();
    let costoTotal = Descuento(valor, cantidad, horas);
    
    alert(`Su tipo de lavadora es ${tipo}. La cantidad que vas a alquilar es ${cantidad}. El costo total va a ser de ${costoTotal}.`);
}

Principal();
