let empleado = prompt("Ingrese su nombre")
let horas = Number(prompt("Ingresa el numero de horas que has trabajado"))
let salario = 0
if(horas < 10){
    salario=(horas * 30000)
}else salario=(horas * 33000)

alert(`Señor ${empleado} el numero de horas es ${horas} y Su salario equivale a: ${salario}`)