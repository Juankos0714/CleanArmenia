let fisica = Number(prompt("Ingresar su nota en la materia de fisica"))
let quimica = Number(prompt("Ingresar su nota en la  materia de quimica"))
let biologia = Number(prompt("Ingresar  su nota en la materia de biologia"))
let matematicas = Number(prompt("Ingresar  su nota en la materia de matematicas"))
let informatica = Number(prompt("Ingresar  su nota en la materia de informatica"))
let promedio = ((fisica+quimica+biologia+matematicas+informatica)/5)

if(promedio > 8){
    alert(`Su promedio ${promedio} es excelente`)
}else if(promedio < 8.1 && promedio > 5.9){
    alert(`Su promedio ${promedio} es bueno`)
}else{
    alert(`Su promedio ${promedio}  es malo`)
}


