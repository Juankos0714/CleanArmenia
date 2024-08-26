let usuarios = [
    {id: 1010059006, pin: "1234", saldo: 3000000, numero_cuenta: 1 },
    {id: 1010059006, pin: "1234", saldo: 100000, numero_cuenta: 2 },
    {id: 1094940970, pin: "1108", saldo: 1000000, numero_cuenta: 1},
    {id: 38879991, pin: "0810", saldo: 50000, numero_cuenta: 1}
];

function validation(id) {
    let user = usuarios.find(u => u.id === id);
    if (!user) {
        alert("Usuario no encontrado");
        return null;
    }
    return user;
    let usuario = usuarios.find(u => u.numero_cuenta === numero_cuenta);

    if (!usuario) {
        alert("Usuario no encontrado. Por favor, verifique su ID.");
        return false;
    }
    return usuario;
}

function validarIdentificacion(idIngresado, pinIngresado, nroCuentaIngresado) {
    let intentos = 3;
    let usuarioEncontrado = usuarios.find(usuario => usuario.id === idIngresado);

    if (!usuarioEncontrado) {
        alert("Usuario no encontrado. Por favor, verifique su ID.");
        return false;
    }
    let usuarioEncontrado2 = usuarios.find(usuario => usuario.numero_cuenta === nroCuentaIngresado);

    if (!usuarioEncontrado2) {
        alert("Usuario no encontrado. Por favor, verifique su ID.");
        return false;
    }
    while (intentos > 0) {
        if (usuarioEncontrado2.pin === pinIngresado) {
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

function retirar(id) {
    let usuario = validation(id);
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

function transferencia(id) {
    let usuario = validation(id);
    if (!usuario) return;

    let idReceptor = Number(prompt("Ingrese el documento de identificación del usuario al que desea transferir"));
    let usuarioReceptor = validation(idReceptor);
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
    let usuario = validation(id);
    if (!usuario) return;
    let monto = Number(prompt("Ingrese el valor a transferir"));
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    if (usuario.saldo >= monto) {
        usuario.saldo -= monto;
        usuario.saldo += monto;
        alert(`Transferencia de $${monto} desde ID ${usuario.id} a ID ${usuarioReceptor.id} exitosa.`);
    } else {
        alert("Fondos insuficientes para realizar la transferencia.");
    }
}

function depositar(id){
    let usuario = validation(id);
    if (!usuario) return;
    
    let deposito = Number(prompt(`Ingrese el valor a depositar ya sea en cheque o en efectivo`))
    if (isNaN(deposito) || deposito <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }
    usuario.saldo += deposito;
    alert(`Su depósito a ID ${usuario.id} de ${deposito} se ha completado con éxito`)    
}

function ingresarOpcion(id) {
    let check = false;
    while (!check) {
        let opcion = prompt("Bienvenido, seleccione:\n1. Consultar saldo\n2. Retirar\n3. Transferir\n4. Depositar\n5. Salir");
        switch (opcion) {
            case "1":
                let usuario = validation(id);
                if (usuario) alert(`Su saldo es $${usuario.saldo}`);
                break;
            case "2":
                retirar(id);
                break;
            case "3":
                transferencia(id);
                break;
            case "4":
                depositar(id);
                break;                
            case "5":
                check = true;
                break;
            default:
                alert("Opción inválida");
        }
    }
}

function main() {
    let idIngresado;
    let usuarioValido = false;

    while (!usuarioValido) {
        idIngresado = Number(prompt("Ingresa tu documento de identificación"));
        let usuario = usuarios.find(u => u.id === idIngresado);
        
        if (usuario) {
            usuarioValido = true;
        } else {
            alert("ID no encontrado. Por favor, intente nuevamente.");
        }
    }
    let nroCuentaIngresado;
    let cuentaValida = false;
    while (!cuentaValida) {
        nroCuentaIngresado = Number(prompt("Ingrese el numero de cuenta que desea utilizar"));
        let usuario = usuarios.find(u => u.numero_cuenta === nroCuentaIngresado);
        
        if (usuario) {
            cuentaValida = true;
        } else {
            alert("Numero de cuenta no encontrado. Por favor, intente nuevamente.");
        }
    }


    let pinIngresado = prompt("Ingresa tu PIN");

    if (validarIdentificacion(idIngresado, pinIngresado)) {
        alert("Bienvenido al sistema");
        ingresarOpcion(idIngresado);
    } else {
        alert("No se pudo validar su identidad. Por favor, inténtelo más tarde.");
    }
}

main();

