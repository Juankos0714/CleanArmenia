const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let puntajeTotal = 0;
let totalPreguntas = 0;

function mostrarInstrucciones() {
  console.log("Instrucciones para la correcta disposición de residuos:");
  console.log("1. Recipiente BLANCO: Residuos aprovechables limpios y secos");
  console.log("   - Plástico, vidrio, metales, papel y cartón limpios");
  console.log("2. Recipiente NEGRO: Residuos no aprovechables");
  console.log("   - Papel higiénico, servilletas, papeles y cartones contaminados con comida");
  console.log("   - Papeles metalizados, residuos COVID-19 (tapabocas, guantes)");
  console.log("3. Recipiente VERDE: Residuos orgánicos aprovechables");
  console.log("   - Restos de comida, residuos de corte de césped y poda de jardín");
}

function obtenerResiduoAleatorio() {
  const residuos = [
    "plástico limpio", "vidrio limpio", "metal limpio", "papel limpio", "cartón limpio",
    "papel higiénico usado", "servilleta usada", "cartón con restos de comida", 
    "papel metalizado", "tapabocas usado", "restos de comida", "hojas de jardín"
  ];
  return residuos[Math.floor(Math.random() * residuos.length)];
}

function obtenerRecipienteCorrecto(residuo) {
  if (["plástico limpio", "vidrio limpio", "metal limpio", "papel limpio", "cartón limpio"].includes(residuo)) {
    return "BLANCO";
  } else if (["papel higiénico usado", "servilleta usada", "cartón con restos de comida", 
              "papel metalizado", "tapabocas usado"].includes(residuo)) {
    return "NEGRO";
  } else {
    return "VERDE";
  }
}

function jugarRonda() {
  return new Promise((resolve) => {
    const residuo = obtenerResiduoAleatorio();
    console.log(`¿En qué recipiente deberías depositar: ${residuo}?`);
    console.log("1. BLANCO  2. NEGRO  3. VERDE");
    
    rl.question('Tu respuesta: ', (respuesta) => {
      const recipienteCorrecto = obtenerRecipienteCorrecto(residuo);
      const respuestaCorrecta = 
        (respuesta === '1' && recipienteCorrecto === "BLANCO") ||
        (respuesta === '2' && recipienteCorrecto === "NEGRO") ||
        (respuesta === '3' && recipienteCorrecto === "VERDE");

      if (respuestaCorrecta) {
        console.log(`¡Correcto! Este residuo va en el recipiente ${recipienteCorrecto}`);
        resolve(1);
      } else {
        console.log(`Incorrecto. Este residuo va en el recipiente ${recipienteCorrecto}`);
        console.log("Recuerda: ");
        if (recipienteCorrecto === "BLANCO") {
          console.log("El recipiente BLANCO es para residuos aprovechables limpios y secos.");
        } else if (recipienteCorrecto === "NEGRO") {
          console.log("El recipiente NEGRO es para residuos no aprovechables.");
        } else {
          console.log("El recipiente VERDE es para residuos orgánicos aprovechables.");
        }
        resolve(0);
      }
    });
  });
}

async function menuPrincipal() {
  console.log("\nMenú principal:");
  console.log("1. Jugar una ronda");
  console.log("2. Ver puntaje");
  console.log("3. Salir");

  rl.question('Elige una opción: ', async (opcion) => {
    switch (opcion) {
      case '1':
        const puntajeRonda = await jugarRonda();
        puntajeTotal += puntajeRonda;
        totalPreguntas++;
        menuPrincipal();
        break;
      case '2':
        if (totalPreguntas > 0) {
          const porcentajeAciertos = (puntajeTotal / totalPreguntas) * 100;
          console.log(`Has respondido ${totalPreguntas} preguntas.`);
          console.log(`Tu puntaje total es: ${puntajeTotal}`);
          console.log(`Porcentaje de aciertos: ${porcentajeAciertos.toFixed(2)}%`);
        } else {
          console.log("Aún no has jugado ninguna ronda.");
        }
        menuPrincipal();
        break;
      case '3':
        console.log("Gracias por jugar. ¡Sigue practicando la correcta disposición de residuos!");
        rl.close();
        break;
      default:
        console.log("Opción no válida. Por favor, seleccione una opción del 1 al 3.");
        menuPrincipal();2
    }
  });
}

console.log("Bienvenido al juego de clasificación de residuos");
mostrarInstrucciones();
menuPrincipal();