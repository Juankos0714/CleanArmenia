let puntuacionUsuario = 0;
let puntuacionComputadora = 0;

let obtenerCarta = function() {
    return Math.floor(Math.random() * 10) + 1;
};

function iniciarPuntuaciones() {
    puntuacionUsuario = obtenerCarta() + obtenerCarta();
    puntuacionComputadora = obtenerCarta() + obtenerCarta();
}
function pedirCartas () {
    alert("Bienvenid@ al juego 21 cartas")
    alert("Tus cartas iniciales suman: " + puntuacionUsuario);
let pedirterceraCarta = prompt("¿Deseas otra carta? (A para sí, cualquier otra tecla para no)").toUpperCase();
if (pedirterceraCarta === "A") {                           
    let terceraCarta = obtenerCarta();
    puntuacionUsuario += terceraCarta;
    let terceraCartaComputadora = obtenerCarta();
    puntuacionComputadora += terceraCartaComputadora;
}
}
function revelarCartas(){
    let verCartas = prompt("¿Quieres ver las cartas? (A para sí, cualquier otra tecla para no)").toUpperCase();

if (verCartas === "A") {
    alert("Tu puntuación final: " + puntuacionUsuario + "\nPuntuación de la computadora: " + puntuacionComputadora);

    if (puntuacionUsuario > 21 && puntuacionComputadora > 21) {
        alert("Ambos perdieron. Las puntuaciones superan 21.");
    } else if (puntuacionUsuario > 21) {
        alert("La computadora gana. Tu puntuación superó 21.");
    } else if (puntuacionComputadora > 21) {
        alert("¡Ganaste! La puntuación de la computadora superó 21.");
    } else if (puntuacionUsuario > puntuacionComputadora) {
        alert("¡Ganaste! Tu puntuación es mayor.");
    } else if (puntuacionComputadora > puntuacionUsuario) {
        alert("La computadora gana. Su puntuación es mayor.");
    } else {
        alert("Es un empate.");
    }
} else {
    alert("Juego terminado sin revelar las cartas.");
}
}

function empezarJuego() {
    iniciarPuntuaciones();
    pedirCartas();
    revelarCartas();
}
empezarJuego()