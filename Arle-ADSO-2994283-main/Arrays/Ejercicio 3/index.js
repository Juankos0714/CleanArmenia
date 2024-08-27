const estadisticas = {
    totalUsuarios: 0,
    terminal: 0,
    asesoria: {
        estudiante: 0,
        directivo: 0
    },
    transferencias: 0
};

const usuariosAtendidos = [];


function registrarAtencion(cedula, tipoAtencion, tipoUsuario = null) {
    estadisticas.totalUsuarios++;
    
    if (tipoAtencion === 'terminal') {
        estadisticas.terminal++;
    } else if (tipoAtencion === 'asesoria') {
        if (tipoUsuario === 'estudiante') {
            estadisticas.asesoria.estudiante++;
        } else if (tipoUsuario === 'directivo') {
            estadisticas.asesoria.directivo++;
        }
    }
    
    usuariosAtendidos.push({ cedula, tipoAtencion, tipoUsuario });
}

function transferirATerminal(cedula) {
    const usuario = usuariosAtendidos.find(u => u.cedula === cedula);
    if (usuario && usuario.tipoAtencion === 'asesoria') {
        estadisticas.transferencias++;
        registrarAtencion(cedula, 'terminal');
        alert('Usuario transferido a terminal.');
    } else {
        alert('No se pudo realizar la transferencia.');
    }
}

function mostrarEstadisticas() {
    let mensaje = 'Estadísticas de atención:\n\n';
    mensaje += `Total de usuarios atendidos: ${estadisticas.totalUsuarios}\n`;
    mensaje += `Usuarios atendidos en terminal: ${estadisticas.terminal}\n`;
    mensaje += 'Usuarios atendidos en asesoría:\n';
    mensaje += `  - Estudiantes: ${estadisticas.asesoria.estudiante}\n`;
    mensaje += `  - Directivos: ${estadisticas.asesoria.directivo}\n`;
    mensaje += `Transferencias realizadas: ${estadisticas.transferencias}`;
    
    alert(mensaje);
}

function main() {
    while (true) {
        const cedula = prompt('Ingrese el número de cédula (o "fin" para terminar):');
        if (cedula === null || cedula.toLowerCase() === 'fin') break;
        
        const tipoAtencion = prompt('Ingrese el tipo de atención (terminal/asesoria):').toLowerCase();
        
        if (tipoAtencion === 'asesoria') {
            const tipoUsuario = prompt('Ingrese el tipo de usuario (estudiante/directivo):').toLowerCase();
            registrarAtencion(cedula, tipoAtencion, tipoUsuario);
        } else if (tipoAtencion === 'terminal') {
            registrarAtencion(cedula, tipoAtencion);
        } else {
            alert('Tipo de atención no válido. Intente de nuevo.');
            continue;
        }
        
        const transferir = confirm('¿Desea transferir a terminal?');
        if (transferir) {
            transferirATerminal(cedula);
        }
        
        alert('Atención registrada con éxito.');
    }
    
    mostrarEstadisticas();
}

main();