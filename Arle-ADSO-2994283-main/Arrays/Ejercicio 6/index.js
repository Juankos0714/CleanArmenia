let citas = [];
function programarCita() {
    const nombrePaciente = prompt("Ingrese el nombre del paciente:");
    const fecha = prompt("Ingrese la fecha de la cita (YYYY-MM-DD):");
    const hora = prompt("Ingrese la hora de la cita (HH:MM):");
    const medico = prompt("Ingrese el nombre del médico:");

    const nuevaCita = {
        id: Date.now(), // Usamos timestamp como ID único
        nombrePaciente,
        fecha,
        hora,
        medico
    };

    citas.push(nuevaCita);
    console.log("Cita programada exitosamente.");
}

function verCitasProgramadas() {
    if (citas.length === 0) {
        console.log("No hay citas programadas.");
        return;
    }

    const citasOrdenadas = citas.sort((a, b) => {
        const fechaA = new Date(a.fecha + 'T' + a.hora);
        const fechaB = new Date(b.fecha + 'T' + b.hora);
        return fechaA - fechaB;
    });

    console.log("Citas programadas:");
    citasOrdenadas.forEach(cita => {
        console.log(`ID: ${cita.id}, Paciente: ${cita.nombrePaciente}, Fecha: ${cita.fecha}, Hora: ${cita.hora}, Médico: ${cita.medico}`);
    });
}

function cancelarCita() {
    const idCita = prompt("Ingrese el ID de la cita que desea cancelar:");
    const index = citas.findIndex(cita => cita.id === parseInt(idCita));

    if (index !== -1) {
        citas.splice(index, 1);
        console.log("Cita cancelada exitosamente.");
    } else {
        console.log("No se encontró una cita con ese ID.");
    }
}

function gestionarCitas() {
    while (true) {
        const opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Programar cita\n" +
            "2. Ver citas programadas\n" +
            "3. Cancelar cita\n" +
            "4. Salir"
        );

        switch (opcion) {
            case "1":
                programarCita();
                break;
            case "2":
                verCitasProgramadas();
                break;
            case "3":
                cancelarCita();
                break;
            case "4":
                console.log("Gracias por usar el sistema de gestión de citas médicas.");
                return;
            default:
                console.log("Opción no válida. Por favor, intente de nuevo.");
        }
    }
}

// Iniciar la aplicación
gestionarCitas();
