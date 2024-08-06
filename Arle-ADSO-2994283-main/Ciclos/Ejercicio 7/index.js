let check = true;
let saldoCuenta = 30000;

// while(check != true){
//     alert(`Bienvenido, seleccione \n 1. Consultar saldo \n 2. Retirar \n 3. Salir`);
//     let opcion =Number(prompt(`Ingrese la opcion: `));
//     switch(opcion){
//         case 1: alert(`Su saldo es ${saldoCuenta}`); break;
//         case 2: {
//             let retiro = Number(prompt(`Ingrese el valor a retirar `));
//             if(retiro < saldoCuenta){
//                 saldoCuenta-= retiro;
//                 alert(`Su saldo es ${saldoCuenta}`); break;  

//             }else{
//                 alert(`El monto ingresado supera el saldo existente`);break;
//             }
   


//         }
//         case 3: check=true; break;

//     }
// }

// for(; check; ){
//     alert(`Bienvenido, seleccione \n 1. Consultar saldo \n 2. Retirar \n 3. Salir`);
//     let opcion =Number(prompt(`Ingrese la opcion: `));
//     switch(opcion){
//          case 1: alert(`Su saldo es ${saldoCuenta}`); break;
//          case 2: {
//              let retiro = Number(prompt(`Ingrese el valor a retirar `));
//              if(retiro < saldoCuenta){
//                  saldoCuenta-= retiro;
//                  alert(`Su saldo es ${saldoCuenta}`); break;  

//              }else{
//                  alert(`El monto ingresado supera el saldo existente`);break;
//              }
   


//          }
//          case 3: check=false; break;
//     }
// }


do{
    alert(`Bienvenido, seleccione \n 1. Consultar saldo \n 2. Retirar \n 3. Salir`);
     let opcion =Number(prompt(`Ingrese la opcion: `));
     switch(opcion){
          case 1: alert(`Su saldo es ${saldoCuenta}`); break;
          case 2: {
              let retiro = Number(prompt(`Ingrese el valor a retirar `));
              if(retiro < saldoCuenta){
                  saldoCuenta-= retiro;
                  alert(`Su saldo es ${saldoCuenta}`); break;  

              }else{
                  alert(`El monto ingresado supera el saldo existente`);break;
              }
   


          }
          case 3: check=false; break;

    }
    
    
}while(check);
