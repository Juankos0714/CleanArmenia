let opcion = "";

// while(opcion != "salir"){
//     let opcion = prompt(`Ingrese una opcion \n notas - \n salir`);
//     if(opcion == "notas"){
//         let nota = Number(prompt(`Ingrese la nota de su asignatura`));
//         nota > 3? alert(`Su nota de ${nota}, es aprobado`):alert(`Su nota de ${nota}, No es aprobado`);
    
//     }else if(opcion == "salir"){
//         break;

//     }else{
//         opcion ="salir";
//         alert(`Opcion Invalida..`)
//     }
// }

// for(; opcion ="salir";){
//     let opcion = prompt(`Ingrese una opcion \n notas - \n salir`);
//     if(opcion == "notas"){
//         let nota = Number(prompt(`Ingrese la nota de su asignatura`));
//         nota > 3? alert(`Su nota de ${nota}, es aprobado`):alert(`Su nota de ${nota}, No es aprobado`);
    
//     }else if(opcion == "salir"){
//         break;

//     }else{
//         opcion ="salir";
//         alert(`Opcion Invalida..`)
//     }
// }


do{
    let opcion = prompt(`Ingrese una opcion \n notas - \n salir`);
    if(opcion == "notas"){
        let nota = Number(prompt(`Ingrese la nota de su asignatura`));
        nota > 3? alert(`Su nota de ${nota}, es aprobado`):alert(`Su nota de ${nota}, No es aprobado`);
    
    }else if(opcion == "salir"){
        break;

    }else{
        opcion ="salir";
        alert(`Opcion Invalida..`)
    }

}while(opcion != "salir")