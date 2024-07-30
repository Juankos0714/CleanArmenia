let idioma = "es";

let mensaje;
switch (idioma) {
    case "es":
        mensaje = "Hola, bienvenido";
        break;
    case "en":
        mensaje = "Hello, welcome";
        break;
    case "fr":
        mensaje = "Bonjour, bienvenue";
        break;
    case "de":
        mensaje = "Hallo, willkommen";
        break;
    default:
        mensaje = "Idioma no soportado";
}

console.log(mensaje);