const banco = {
    "1094933466": {
        pin: "3466",
        cuentas: {
            "corriente": 500000,
            "ahorros": 1000000
        }
    }
};

const validarCliente = (documento, pin) => {
    let intentos = 0;
    while (intentos < 3) {
        if (banco[documento] && banco[documento].pin === pin) {
            alert("Acceso concedido.");
            return true;
        } else {
            intentos++;
            if (intentos < 3) {
                alert("PIN incorrecto. Inténtelo nuevamente.");
                pin = prompt("Ingrese su PIN de 4 dígitos:");
            } else {
                alert("Demasiados intentos fallidos... Saliendo de la aplicación.");
                return false;
            }
        }
    }
    return false;
};

const retirar = (id, cuenta, monto) => {
    if (monto % 50000 !== 0) {
        alert("El monto debe ser un múltiplo de $50000.");
        return;
    }
    if (banco[id].cuentas[cuenta] >= monto) {
        banco[id].cuentas[cuenta] -= monto;
        alert(`Retiro exitoso. Puede tomar ${monto} de la bandeja principal.`);
    } else {
        alert("Fondos insuficientes.");
    }
};

const depositar = (id, cuenta, monto, tipo) => {
    banco[id].cuentas[cuenta] += monto;
    alert(`Depósito de ${monto} en ${tipo} exitoso.`);
};

const transferir = (id, cuentaOrigen, cuentaDestino, monto) => {
    if (banco[id].cuentas[cuentaOrigen] >= monto) {
        banco[id].cuentas[cuentaOrigen] -= monto;
        banco[id].cuentas[cuentaDestino] += monto;
        alert(`Transferencia de ${monto} desde ${cuentaOrigen} a ${cuentaDestino} exitosa.`);
    } else {
        alert("Fondos insuficientes para realizar la transferencia.");
    }
};

const consultarSaldo = (id, cuenta) => {
    alert(`Saldo de la cuenta ${cuenta}: ${banco[id].cuentas[cuenta]}`);
};

const menu = (id) => {
    let continuar = true;
    while (continuar) {
        let opcion = prompt("Seleccione la opción que desea realizar:\n1. Retirar\n2. Depositar\n3. Transferir\n4. Consultar Saldo\n5. Salir");
        switch(opcion) {
            case '1':
                let cuenta = prompt("Ingrese la clase de cuenta (\n1. corriente\n2. ahorros):");
                cuenta = cuenta === '1' ? 'corriente' : 'ahorros';
                let monto = parseInt(prompt(`Ingrese el monto que desea retirar (${banco[id].cuentas[cuenta]} disponible):`));
                retirar(id, cuenta, monto);
                break;
            case '2':
                cuenta = prompt("Ingrese la clase de cuenta (\n1. corriente\n2. ahorros):");
                cuenta = cuenta === '1' ? 'corriente' : 'ahorros';
                monto = parseInt(prompt(`Ingrese la cantidad de monto a depositar (Saldo actual: ${banco[id].cuentas[cuenta]}):`));
                let tipo = prompt("¿En efectivo o cheque?");
                depositar(id, cuenta, monto, tipo);
                break;
            case '3':
                let cuentaOrigen = prompt("Ingrese la clase de cuenta de origen (\n1. corriente\n2. ahorros):");
                cuentaOrigen = cuentaOrigen === '1' ? 'corriente' : 'ahorros';
                let cuentaDestino = prompt("Ingrese la clase de cuenta de destino (\n1. corriente\n2. ahorros):");
                cuentaDestino = cuentaDestino === '1' ? 'corriente' : 'ahorros';
                monto = parseInt(prompt(`Ingrese la cantidad de monto a transferir (Saldo disponible en ${cuentaOrigen}: ${banco[id].cuentas[cuentaOrigen]}):`));
                transferir(id, cuentaOrigen, cuentaDestino, monto);
                break;
            case '4':
                cuenta = prompt("Ingrese la clase de cuenta (\n1. corriente\n2. ahorros):");
                cuenta = cuenta === '1' ? 'corriente' : 'ahorros';
                consultarSaldo(id, cuenta);
                break;
            case '5':
                continuar = false;
                alert("Gracias por usar nuestro cajero automático... ¡¡¡vuelva pronto!!!");
                break;
            default:
                alert("Opción inválida.");
        }
    }
};

const main = () => {
    let documento = prompt("Ingrese su número de documento de identidad:");
    let pin = prompt("Ingrese su PIN de 4 dígitos:");

    if (validarCliente(documento, pin)) {
        menu(documento);
    }
};

main();
