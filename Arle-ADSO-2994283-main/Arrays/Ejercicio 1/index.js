let usuarios = [
    {id: 1010059006, pin: "1234", saldo: 3000000, numero_cuenta: 1 },
    {id: 1010059006, pin: "1234", saldo: 100000, numero_cuenta: 2 },
    {id: 1094940970, pin: "1108", saldo: 1000000, numero_cuenta: 1},
    {id: 38879991, pin: "0810", saldo: 50000, numero_cuenta: 1}
];

function validation(id, numero_cuenta) {
    let usuario = usuarios.find(u => u.id === id && u.numero_cuenta === numero_cuenta);
    if (!usuario) {
        alert("Usuario no encontrado");
        return null;
    }
    return usuario;
}

function validarIdentificacion(idIngresado, pinIngresado, nroCuentaIngresado) {
    let intentos = 3;
    let usuarioEncontrado = usuarios.find(usuario => usuario.id === idIngresado && usuario.numero_cuenta === nroCuentaIngresado);

    if (!usuarioEncontrado) {
        alert("Usuario no encontrado. Por favor, verifique su ID y número de cuenta.");
        return false;
    }

    while (intentos > 0) {
        if (usuarioEncontrado.pin === pinIngresado) {
            alert("Ingreso exitoso");
            return true;
        } else {
            intentos--;
            if (intentos > 0) {
                alert(`PIN incorrecto. Le quedan ${intentos} intentos.`);
                pinIngresado = prompt("Ingrese su PIN de seguridad");
            } else {
                alert("Excedió la cantidad de intentos");
                return false;
            }
        }
    }
    return false;
}

function retirar(id, numero_cuenta) {
    let usuario = validation(id, numero_cuenta);
    if (!usuario) return;

    let retiro = Number(prompt("Ingrese el valor a retirar"));
    if (isNaN(retiro) || retiro <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    if (retiro % 50000 !== 0) {
        alert("El valor ingresado debe ser un múltiplo de $50000.");
        return;
    }

    if (retiro <= usuario.saldo) {
        usuario.saldo -= retiro;
        alert(`Retiro exitoso. Su nuevo saldo es $${usuario.saldo}`);
    } else {
        alert("El monto ingresado supera el saldo existente");
    }
}

function transferencia(id, numero_cuenta) {
    let usuario = validation(id, numero_cuenta);
    if (!usuario) return;

    let idReceptor = Number(prompt("Ingrese el documento de identificación del usuario al que desea transferir"));
    let nroCuentaReceptor = Number(prompt("Ingrese el número de cuenta del usuario al que desea transferir"));
    let usuarioReceptor = validation(idReceptor, nroCuentaReceptor);
    if (!usuarioReceptor) return;

    let monto = Number(prompt("Ingrese el valor a transferir"));
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    if (usuario.saldo >= monto) {
        usuario.saldo -= monto;
        usuarioReceptor.saldo += monto;
        alert(`Transferencia de $${monto} desde ID ${usuario.id} a ID ${usuarioReceptor.id} exitosa.`);
    } else {
        alert("Fondos insuficientes para realizar la transferencia.");
    }
}

function intertransferencia(id, numero_cuenta) {
    let usuario = validation(id, numero_cuenta);
    if (!usuario) return;

    let nroCuentaReceptora = Number(prompt(`Ingrese el numero de cuenta al que desea transferir`));
    let cuentaReceptora = usuarios.find(u => u.id === usuario.id && u.numero_cuenta === nroCuentaReceptora);
    if (!cuentaReceptora) {
        alert("Cuenta receptora no encontrada");
        return;
    }

    let monto = Number(prompt("Ingrese el valor a transferir"));
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    if (usuario.saldo >= monto) {
        usuario.saldo -= monto;
        cuentaReceptora.saldo += monto;
        alert(`Transferencia de $${monto} desde cuenta ${usuario.numero_cuenta} a cuenta ${cuentaReceptora.numero_cuenta} exitosa.`);
    } else {
        alert("Fondos insuficientes para realizar la transferencia.");
    }
}

function depositar(id, numero_cuenta){
    let usuario = validation(id, numero_cuenta);
    if (!usuario) return;
    
    let deposito = Number(prompt(`Ingrese el valor a depositar ya sea en cheque o en efectivo`))
    if (isNaN(deposito) || deposito <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }
    usuario.saldo += deposito;
    alert(`Su depósito a la cuenta ${usuario.numero_cuenta} de ${deposito} se ha completado con éxito`)    
}

function ingresarOpcion(id, numero_cuenta) {
    let check = false;
    while (!check) {
        let opcion = prompt("Bienvenido, seleccione:\n1. Consultar saldo\n2. Retirar\n3. Transferir\n4. Depositar\n5. Intertransferencia\n6. Salir");
        switch (opcion) {
            case "1":
                let usuario = validation(id, numero_cuenta);
                if (usuario) alert(`Su saldo es $${usuario.saldo}`);
                break;
            case "2":
                retirar(id, numero_cuenta);
                break;
            case "3":
                transferencia(id, numero_cuenta);
                break;
            case "4":
                depositar(id, numero_cuenta);
                break;
            case "5":
                intertransferencia(id, numero_cuenta);
                break;
            case "6":
                check = true;
                break;
            default:
                alert("Opción inválida");
        }
    }
}

function main() {
    let idIngresado, nroCuentaIngresado;
    let usuarioValido = false;

    while (!usuarioValido) {
        idIngresado = Number(prompt("Ingresa tu documento de identificación"));
        nroCuentaIngresado = Number(prompt("Ingresa tu número de cuenta"));
        
        let usuario = usuarios.find(u => u.id === idIngresado && u.numero_cuenta === nroCuentaIngresado);
        
        if (usuario) {
            usuarioValido = true;
        } else {
            alert("ID o número de cuenta no encontrado. Por favor, intente nuevamente.");
        }
    }

    let pinIngresado = prompt("Ingresa tu PIN");

    if (validarIdentificacion(idIngresado, pinIngresado, nroCuentaIngresado)) {
        alert("Bienvenido al sistema");
        ingresarOpcion(idIngresado, nroCuentaIngresado);
    } else {
        alert("No se pudo validar su identidad. Por favor, inténtelo más tarde.");
    }
}

main();



