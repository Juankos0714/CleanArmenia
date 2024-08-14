let operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):").toLowerCase();
let minutosInternacionales = Number(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
let cargoFijo, valorMinutoInternacional, valorPaqueteDatos, total;

if (operador === "tigo") {
    cargoFijo = 45000;
    valorMinutoInternacional = 200;
    valorPaqueteDatos = 12000;
} else if (operador === "claro") {
    cargoFijo = 30000;
    valorMinutoInternacional = 100;
    valorPaqueteDatos = 18000;
} else if (operador === "movistar") {
    cargoFijo = 40000;
    valorMinutoInternacional = 250;
    valorPaqueteDatos = 8000;
} else {
    alert("Operador no válido. Por favor, ingrese Claro, Tigo o Movistar.");
}

if (cargoFijo) {
    total = cargoFijo + (valorMinutoInternacional * minutosInternacionales) + valorPaqueteDatos;
    
    alert("Resumen de su plan:\n" +
          "Operador: " + operador + "\n" +
          "Cargo fijo: $" + cargoFijo + "\n" +
          "Valor minuto internacional: $" + valorMinutoInternacional + "\n" +
          "Minutos internacionales consumidos: " + minutosInternacionales + "\n" +
          "Valor paquete de datos: $" + valorPaqueteDatos + "\n" +
          "Total a pagar: $" + total);
}