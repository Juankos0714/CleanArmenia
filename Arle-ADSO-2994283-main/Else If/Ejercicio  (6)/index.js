let numero1 = Number(prompt("Ingrese un numero  aleatorio"))
let numero2 = Number(prompt("Ingrese un numero  aleatorio"))
let numero3 = Number(prompt("Ingrese un numero  aleatorio"))

if(numero1 > numero2 && numero1  > numero3){
    alert(`El numero mayor es el ${numero1}`)
}else if(numero2 > numero1 && numero2  > numero3){
    alert(`El numero mayor es el ${numero2}`)
}else{
    alert(`El numero mayor es el ${numero3}`)
}