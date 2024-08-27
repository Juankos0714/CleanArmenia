let habitaciones = [
    { Numero_de_Habitacion: 101, tipo_habitacion: "individual", reserva: false, capacidad: 2, fumadores: false },
    { Numero_de_Habitacion: 102, tipo_habitacion: "doble", reserva: false, capacidad: 4, fumadores: true },
    { Numero_de_Habitacion: 103, tipo_habitacion: "familiar", reserva: false, capacidad: 6, fumadores: false },
    { Numero_de_Habitacion: 104, tipo_habitacion: "individual", reserva: false, capacidad: 2, fumadores: true },
    { Numero_de_Habitacion: 105, tipo_habitacion: "doble", reserva: false, capacidad: 4, fumadores: false },
    { Numero_de_Habitacion: 201, tipo_habitacion: "familiar", reserva: false, capacidad: 6, fumadores: true },
    { Numero_de_Habitacion: 202, tipo_habitacion: "individual", reserva: false, capacidad: 2, fumadores: false },
    { Numero_de_Habitacion: 203, tipo_habitacion: "doble", reserva: false, capacidad: 4, fumadores: true },
    { Numero_de_Habitacion: 204, tipo_habitacion: "familiar", reserva: false, capacidad: 6, fumadores: false },
    { Numero_de_Habitacion: 205, tipo_habitacion: "doble", reserva: false, capacidad: 4, fumadores: true }
];

let reservas = [];

function realizarReserva() {
    let nombre = prompt("Ingrese el nombre de quien reserva:");
    let pais = prompt("Ingrese el país de origen:");
    let numPersonas = parseInt(prompt("Ingrese el número de personas:"));
    let periodoEstadia = parseInt(prompt("Ingrese el periodo de estadía (en días):"));
    let mascota = confirm("¿Trae mascota? (OK para Sí, Cancelar para No)");
    let fumadores = confirm("¿Son fumadores? (OK para Sí, Cancelar para No)");

    let habitacionesDisponibles = habitaciones.filter(h => 
        !h.reserva &&
        h.capacidad >= numPersonas &&
        (!fumadores || h.fumadores) && // Fumadores solo en habitaciones para fumadores
        (!mascota || h.tipo_habitacion === "familiar") // Mascotas solo en habitaciones familiares
    );

    if (habitacionesDisponibles.length === 0) {
        alert("Lo sentimos, no hay habitaciones disponibles que cumplan con sus requisitos.");
        return;
    }

    let mensaje = "Habitaciones disponibles:\n";
    habitacionesDisponibles.forEach((h, index) => {
        mensaje += `${index + 1}. Habitación ${h.Numero_de_Habitacion}: ${h.tipo_habitacion}, capacidad ${h.capacidad}, ${h.fumadores ? 'fumadores' : 'no fumadores'}\n`;
    });
    mensaje += "Seleccione el número de la habitación que desea reservar:";

    let seleccion = parseInt(prompt(mensaje)) - 1;
    if (seleccion < 0 || seleccion >= habitacionesDisponibles.length) {
        alert("Selección inválida.");
        return;
    }

    let habitacionSeleccionada = habitacionesDisponibles[seleccion];
    habitacionSeleccionada.reserva = true;

    let nuevaReserva = {
        nombre_quien_reserva: nombre,
        pais_origen: pais,
        numero_personas: numPersonas,
        periodo_estadia: periodoEstadia,
        numero_personas_hotel: calcularPersonasEnHotel() + numPersonas,
        mascota: mascota,
        fumadores: fumadores,
        habitacion: habitacionSeleccionada.Numero_de_Habitacion
    };
    reservas.push(nuevaReserva);
    alert(`Reserva realizada con éxito. Habitación asignada: ${habitacionSeleccionada.Numero_de_Habitacion}`);
}

function consultarReservas() {
    let filtro = prompt("Ingrese el nombre, país o número de habitación para buscar reservas (deje en blanco para ver todas):");
    let reservasFiltradas = reservas.filter(r => 
        !filtro || 
        r.nombre_quien_reserva.toLowerCase().includes(filtro.toLowerCase()) ||
        r.pais_origen.toLowerCase().includes(filtro.toLowerCase()) ||
        r.habitacion.toString() === filtro
    );
    
    if (reservasFiltradas.length > 0) {
        let mensaje = "Reservas encontradas:\n";
        reservasFiltradas.forEach(r => {
            mensaje += `Nombre: ${r.nombre_quien_reserva}, País: ${r.pais_origen}, Habitación: ${r.habitacion}, Personas: ${r.numero_personas}, Estadía: ${r.periodo_estadia} días, Mascota: ${r.mascota ? 'Sí' : 'No'}, Fumadores: ${r.fumadores ? 'Sí' : 'No'}\n`;
        });
        alert(mensaje);
    } else {
        alert("No se encontraron reservas con ese filtro.");
    }
}

function consultarHabitacionesDisponibles() {
    let tipoFiltro = prompt("Filtrar por tipo (individual/doble/familiar), fumadores (si/no), o mascotas (si/no), o dejar en blanco para ver todas:");
    let habitacionesDisponibles = habitaciones.filter(h => !h.reserva &&
        (!tipoFiltro || 
         h.tipo_habitacion.toLowerCase() === tipoFiltro.toLowerCase() ||
         (tipoFiltro.toLowerCase() === 'si' && h.fumadores) ||
         (tipoFiltro.toLowerCase() === 'no' && !h.fumadores) ||
         (tipoFiltro.toLowerCase() === 'si' && h.tipo_habitacion === "familiar")) 
    );
    
    document.write("<h2>Habitaciones Disponibles</h2>");
    document.write("<table border='1'><tr><th>Número</th><th>Tipo</th><th>Capacidad</th><th>Fumadores</th><th>Permite Mascotas</th></tr>");
    habitacionesDisponibles.forEach(h => {
        document.write(`<tr><td>${h.Numero_de_Habitacion}</td><td>${h.tipo_habitacion}</td><td>${h.capacidad}</td><td>${h.fumadores ? 'Sí' : 'No'}</td><td>${h.tipo_habitacion === 'familiar' ? 'Sí' : 'No'}</td></tr>`);
    });
    document.write("</table>");
    document.write("<br><button onclick='window.location.reload();'>Volver al Menú</button>");
}

function calcularPersonasEnHotel() {
    return reservas.reduce((total, reserva) => total + reserva.numero_personas, 0);
}

function contarHabitacionesReservadas() {
    return habitaciones.filter(h => h.reserva).length;
}

function menuPrincipal() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt(
            "Menú Principal\n" +
            "1. Realizar una reserva\n" +
            "2. Consultar reservas\n" +
            "3. Consultar habitaciones disponibles\n" +
            "4. Ver estadísticas\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                realizarReserva();
                break;
            case "2":
                consultarReservas();
                break;
            case "3":
                consultarHabitacionesDisponibles();
                continuar = false;
                break;
            case "4":
                alert(`Total de habitaciones reservadas: ${contarHabitacionesReservadas()}\n` +
                      `Total de personas en el hotel: ${calcularPersonasEnHotel()}`);
                break;
            case "5":
                continuar = false;
                alert("Gracias por usar nuestro sistema de reservas.");
                break;
            default:
                alert("Opción inválida. Por favor, intente de nuevo.");
        }
    }
}

alert("Bienvenido al hotel Bajo las estrellas");
menuPrincipal();