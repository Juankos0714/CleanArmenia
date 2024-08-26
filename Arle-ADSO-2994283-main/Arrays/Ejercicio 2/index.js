// Definición de las habitaciones
let habitaciones = [
    { Numero_de_Habitacion: 101, tipo_habitacion: "individual", reserva: false, capacidad: 2 },
    { Numero_de_Habitacion: 102, tipo_habitacion: "doble", reserva: false, capacidad: 4 },
    { Numero_de_Habitacion: 103, tipo_habitacion: "familiar", reserva: false, capacidad: 6 },
    { Numero_de_Habitacion: 104, tipo_habitacion: "individual", reserva: false, capacidad: 2 },
    { Numero_de_Habitacion: 105, tipo_habitacion: "doble", reserva: false, capacidad: 4 },
    { Numero_de_Habitacion: 201, tipo_habitacion: "familiar", reserva: false, capacidad: 6 },
    { Numero_de_Habitacion: 202, tipo_habitacion: "individual", reserva: false, capacidad: 2 },
    { Numero_de_Habitacion: 203, tipo_habitacion: "doble", reserva: false, capacidad: 4 },
    { Numero_de_Habitacion: 204, tipo_habitacion: "familiar", reserva: false, capacidad: 6 },
    { Numero_de_Habitacion: 205, tipo_habitacion: "doble", reserva: false, capacidad: 4 }
];

let reservas = [
    {nombre_quien_reserva: "Nicolas Lopez", pais_origen: "Argentina", numero_personas: 4, periodo_estadia: 8, numero_personas_hotel: 52, mascota: true},
    {nombre_quien_reserva: "Maria González", pais_origen: "España", numero_personas: 2, periodo_estadia: 5, numero_personas_hotel: 48, mascota: false},
    {nombre_quien_reserva: "John Smith", pais_origen: "Estados Unidos", numero_personas: 1, periodo_estadia: 3, numero_personas_hotel: 50, mascota: false},
    {nombre_quien_reserva: "Yuki Tanaka", pais_origen: "Japón", numero_personas: 3, periodo_estadia: 10, numero_personas_hotel: 55, mascota: false},
    {nombre_quien_reserva: "Sophie Dubois", pais_origen: "Francia", numero_personas: 2, periodo_estadia: 7, numero_personas_hotel: 51, mascota: true},
    {nombre_quien_reserva: "Carlos Mendoza", pais_origen: "México", numero_personas: 5, periodo_estadia: 6, numero_personas_hotel: 60, mascota: false},
    {nombre_quien_reserva: "Emma Wilson", pais_origen: "Reino Unido", numero_personas: 1, periodo_estadia: 4, numero_personas_hotel: 45, mascota: false},
    {nombre_quien_reserva: "Hans Mueller", pais_origen: "Alemania", numero_personas: 2, periodo_estadia: 9, numero_personas_hotel: 53, mascota: true},
    {nombre_quien_reserva: "Lucia Rossi", pais_origen: "Italia", numero_personas: 3, periodo_estadia: 5, numero_personas_hotel: 49, mascota: false},
    {nombre_quien_reserva: "Ahmed Al-Fayed", pais_origen: "Egipto", numero_personas: 4, periodo_estadia: 12, numero_personas_hotel: 58, mascota: false}
  ];

function realizarReserva() {
    let nombre = prompt("Ingrese el nombre de quien reserva:");
    let pais = prompt("Ingrese el país de origen:");
    let numPersonas = parseInt(prompt("Ingrese el número de personas:"));
    let periodoEstadia = parseInt(prompt("Ingrese el periodo de estadía (en días):"));
    let mascota = confirm("¿Trae mascota? (OK para Sí, Cancelar para No)");
    let tipoHabitacion = prompt("Ingrese el tipo de habitación (individual, doble o familiar):");
    let fumadores = confirm("¿Habitación para fumadores? (OK para Sí, Cancelar para No)");

    let habitacionDisponible = habitaciones.find(h => 
        h.tipo_habitacion === tipoHabitacion && 
        !h.reserva &&
        h.capacidad >= numPersonas &&
        (tipoHabitacion === "familiar" || !mascota)
    );

    if (habitacionDisponible) {
        habitacionDisponible.reserva = true;
        let nuevaReserva = {
            nombre_quien_reserva: nombre,
            pais_origen: pais,
            numero_personas: numPersonas,
            periodo_estadia: periodoEstadia,
            numero_personas_hotel: calcularPersonasEnHotel() + numPersonas,
            mascota: mascota,
            habitacion: habitacionDisponible.Numero_de_Habitacion
        };
        reservas.push(nuevaReserva);
        alert(`Reserva realizada con éxito. Habitación asignada: ${habitacionDisponible.Numero_de_Habitacion}`);
    } else {
        alert("Lo sentimos, no hay habitaciones disponibles que cumplan con sus requisitos.");
    }
}

function consultarReservas() {
    let nombreIngresado = prompt("Ingrese el nombre para buscar reservas:");
    let reservasEncontradas = reservas.filter(r => r.nombre_quien_reserva.toLowerCase() === nombreIngresado.toLowerCase());
    if (reservasEncontradas.length > 0) {
        let mensaje = "Reservas encontradas:\n";
        reservasEncontradas.forEach(r => {
            mensaje += `Habitación: ${r.habitacion}, Personas: ${r.numero_personas}, Estadía: ${r.periodo_estadia} días\n`;
        });
        alert(mensaje);
    } else {
        alert("No se encontraron reservas para ese nombre.");
    }
}

function consultarHabitacionesDisponibles() {
    let habitacionesDisponibles = habitaciones.filter(h => !h.reserva);
    let mensaje = "Habitaciones disponibles:\n";
    habitacionesDisponibles.forEach(h => {
        mensaje += `Habitación ${h.Numero_de_Habitacion}: ${h.tipo_habitacion}, ${h.fumadores ? 'fumadores' : 'no fumadores'}\n`;
    });
    alert(mensaje);
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
