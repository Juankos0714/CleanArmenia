function obtenerDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const exito = false;
            if(exito){
                resolve({id: 1, nombre: "Maria"});
            }else {
                reject("Error al obtner los datos");
            }
        }, 2000);
    });
}
obtenerDatos()
    .then(datos => console.log("Datos obtenidos:", datos))
    .catch(error => console.error(error));
console.log("esperando datos...");