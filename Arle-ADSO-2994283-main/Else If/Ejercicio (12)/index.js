let modeloAuto = Number(prompt("Por favor, ingrese el número de modelo de su automóvil:"));


if (modeloAuto === 119 || modeloAuto === 179 || 
    (modeloAuto >= 189 && modeloAuto <= 195) || 
    modeloAuto === 221 || modeloAuto === 780) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("Su automóvil no está defectuoso.");
}