function obtenerDatos(callback) {
    setTimeout(() => {
        const datos = {id: 1, nombre: "juan"};
        callback(datos);
    },2000);
}
function procesarDatos(datos){
    console.log("Datos procesados:", datos);
}
obtenerDatos(procesarDatos);
console.log("Eperando datos...");
