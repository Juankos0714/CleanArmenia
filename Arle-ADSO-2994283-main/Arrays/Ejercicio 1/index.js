let check = true;
let saldoCuenta = 30000;
let usuarios = [{id: 1010059006, pin: 1234, saldo: 3000000},
    {id: 1094940970, pin: 1080, saldo: 100 }
]


function validarIdentificacion () {
    let idIngresado = 1010059006; //Number(prompt(`ingresa tu documento de identificacion`))
    let pinIngresado = Number(prompt(`ingresa tu pin`))
   
    let validadorId1 = usuarios.map(u => u.id);
    let validadorId2 = validadorId1.some(validadorId1 => validadorId1 == idIngresado)
    let validadorPin1 = usuarios.map(u => u.pin);
    let valdidadorPin2 = validadorPin1.some(validadorPin1 => validadorPin1 == pinIngresado)
    console.log(validadorId2)
    console.log(validadorPin2)
}
validarIdentificacion()
function ingresarOpcion (){
while(check != true){
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
        case 3: check=true; break;

    }
}
}
