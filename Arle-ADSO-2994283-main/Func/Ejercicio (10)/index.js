function numeroCopias(numCopias, precioPorCopia, precioTotal){
numCopias = Number(prompt("Ingrese el número de copias que desea imprimir:"));

if (numCopias >= 0 && numCopias <= 499) {
    precioPorCopia = 120;
} else if (numCopias >= 500 && numCopias <= 749) {
    precioPorCopia = 100;
} else if (numCopias >= 750 && numCopias <= 999) {
    precioPorCopia = 80;
} else if (numCopias >= 1000) {
    precioPorCopia = 50;
} else {
    alert("Número de copias inválido. Por favor, ingrese un número positivo.");
}

if (precioPorCopia) {
    precioTotal = numCopias * precioPorCopia;
    
    alert("Precio por copia: $" + precioPorCopia + "\nPrecio total: $" + precioTotal);
}
}
numeroCopias()
