// let valor = true;
// while(valor){
//     alert(`menu: 1. consultar 2. actualizar 3. salir`);
//     let opcion = Number(prompt(`Ingrese la opcion`));
//     valor = opcion == 3? false:true;
// }


// for (let valor = true; valor;) {
//     alert(`menu: 1. consultar 2. actualizar 3. salir`);
//     let opcion = Number(prompt(`Ingrese la opcion`));
//     valor = opcion !== 3;
// }

let valor = true;
do{
     alert(`menu: 1. consultar 2. actualizar 3. salir`);
     let opcion = Number(prompt(`Ingrese la opcion`));
     valor = opcion == 3? false:true;
}while(valor)
