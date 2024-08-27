const SistemaTurnos = {
    colaEspera: [],
    contadorTurnos: 0,

    tomarTurno: function() {
        this.contadorTurnos++;
        const nuevoTurno = {
            numero: this.contadorTurnos,
            timestamp: new Date()
        };
        this.colaEspera.push(nuevoTurno);
        alert(`Se ha generado el turno número ${nuevoTurno.numero}. Por favor, espere a ser llamado.`);
        this.mostrarColaEspera();
        return nuevoTurno;
    },

    llamarCliente: function() {
        if (this.colaEspera.length === 0) {
            alert("No hay clientes en espera.");
            return null;
        }
        const clienteLlamado = this.colaEspera.shift();
        alert(`Llamando al cliente con turno número ${clienteLlamado.numero}.`);
        this.mostrarColaEspera();
        return clienteLlamado;
    },

    mostrarColaEspera: function() {
        let mensaje = "Cola de espera actual:\n";
        if (this.colaEspera.length === 0) {
            mensaje += "No hay clientes en espera.";
        } else {
            this.colaEspera.forEach((turno, index) => {
                mensaje += `${index + 1}. Turno ${turno.numero}\n`;
            });
        }
        alert(mensaje);
    },

    mostrarContadorTurnos: function() {
        alert(`Se han generado ${this.contadorTurnos} turnos hasta el momento.`);
    }
};

function main() {
    while (true) {
        const opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Tomar un turno\n" +
            "2. Llamar al siguiente cliente\n" +
            "3. Mostrar cola de espera\n" +
            "4. Mostrar contador de turnos\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                SistemaTurnos.tomarTurno();
                break;
            case "2":
                SistemaTurnos.llamarCliente();
                break;
            case "3":
                SistemaTurnos.mostrarColaEspera();
                break;
            case "4":
                SistemaTurnos.mostrarContadorTurnos();
                break;
            case "5":
                alert("Gracias por usar el sistema de gestión de turnos.");
                return;
            default:
                alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
}

main();