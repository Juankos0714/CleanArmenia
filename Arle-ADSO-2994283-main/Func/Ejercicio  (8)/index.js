let mensualidad1 = 15000
let mensualidad2 = 35000
let mensualidad3 = 86000
let valorTotal = 0
let tiempo = Number(prompt("Ingresa la cantidad de meses que deseas estar en el gimnasio, si solo deseas probar nuestro servicio por 15 dias ingresa la opcion 0"))

if(tiempo < 1){
    valorTotal += mensualidad1

}else if(tiempo > 0 && tiempo <3){
    valorTotal += mensualidad2 * tiempo
}else{
    let trimestresCompletos = (tiempo - (tiempo % 3)) / 3
    valorTotal += trimestresCompletos * mensualidad3
    valorTotal += ((tiempo % 3)*mensualidad2)
}alert(`El valor total a pagar es ${valorTotal}`)