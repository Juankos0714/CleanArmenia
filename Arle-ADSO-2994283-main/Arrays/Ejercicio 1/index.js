let usuarios = [
    {id: 1010059006, pin: "1234", saldo: 3000000},
    {id: 1094940970, pin: "1108", saldo: 1000000},
    {id: 38879991, pin: "0810", saldo: 50000}
];

function validation(id) {
    let usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        alert("Usuario no encontrado");
        return null;
    }
    return usuario;
}

function validarIdentificacion(idIngresado, pinIngresado) {
    let intentos = 3;
    let usuarioEncontrado = usuarios.find(usuario => usuario.id === idIngresado);

    if (!usuarioEncontrado) {
        alert("Usuario no encontrado");
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
function depositar(){
    let usuario = validation(id);
    if (!usuario) return;
    
    let deposito = Number(prompt(`Ingrese  el valor  a de positar ya sea  en cheque o en efectivo`))
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }
    usuario.saldo += deposito;
    alert(`Su deposito a ID ${usuario.id} de ${deposito} se ha completaado con  exito`)    
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
    let idIngresado = Number(prompt("Ingresa tu documento de identificación"));
    let pinIngresado = prompt("Ingresa tu PIN");

    if (validarIdentificacion(idIngresado, pinIngresado)) {
        alert("Bienvenido al sistema");
        ingresarOpcion(idIngresado);
    } else {
        alert("No se pudo validar su identidad. Por favor, inténtelo más tarde.");
    }
}

main();