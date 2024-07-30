let numero = 3
function DiaSemana(numero)
{
switch (numero) {
    case 1:
        return "Lunes";
    case 2:
        return "Martes";
    case 3:
        return "Miércoles";
    case 4:
        return "Jueves";
    case 5:
        return "Viernes";
    case 6:
        return "Sábado";
    case 7:
        return "Domingo";
    default:
        return "Número inválido";
}
}
console.log(DiaSemana(3));
console.log(DiaSemana(7)); 
console.log(DiaSemana(0)); 