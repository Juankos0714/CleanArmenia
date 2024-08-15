function obtenerOperador() {
    let operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):").toLowerCase();
    while (operador !== "claro" && operador !== "tigo" && operador !== "movistar") {
        alert("Operador no válido. Por favor, ingrese Claro, Tigo o Movistar.");
        operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):").toLowerCase();
    }
    return operador;
}

function obtenerMinutosInternacionales() {
    return Number(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
}

function obtenerTarifas(operador) {
    const tarifas = {
        tigo: { cargoFijo: 45000, valorMinutoInternacional: 200, valorPaqueteDatos: 12000 },
        claro: { cargoFijo: 30000, valorMinutoInternacional: 100, valorPaqueteDatos: 18000 },
        movistar: { cargoFijo: 40000, valorMinutoInternacional: 250, valorPaqueteDatos: 8000 }
    };
    return tarifas[operador];
}

function calcularTotal(tarifas, minutosInternacionales) {
    return tarifas.cargoFijo + (tarifas.valorMinutoInternacional * minutosInternacionales) + tarifas.valorPaqueteDatos;
}

function generarResumen(operador, tarifas, minutosInternacionales, total) {
    return `Resumen de su plan:
Operador: ${operador}
Cargo fijo: $${tarifas.cargoFijo}
Valor minuto internacional: $${tarifas.valorMinutoInternacional}
Minutos internacionales consumidos: ${minutosInternacionales}
Valor paquete de datos: $${tarifas.valorPaqueteDatos}
Total a pagar: $${total}`;
}

function calcularPlanTelefonico() {
    const operador = obtenerOperador();
    const minutosInternacionales = obtenerMinutosInternacionales();
    const tarifas = obtenerTarifas(operador);
    const total = calcularTotal(tarifas, minutosInternacionales);
    const resumen = generarResumen(operador, tarifas, minutosInternacionales, total);
    alert(resumen);
}
calcularPlanTelefonico()