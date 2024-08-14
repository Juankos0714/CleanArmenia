
let genero = Number(prompt("Ingrese 1 si su  genero es femenino o 2 si su genero es masculino"))
let edad = Number(prompt("Ingrese su edad"))
if(genero == 1 && edad > 50){
    alert("Su apoyo economico es de 120000")
}else if(genero == 1 && edad < 51 && edad > 29){
    alert("Su apoyo economico es de 100000")
}else if(genero == 2){
    alert("Su apoyo economico es de 40000")
}else{
    alert("No aplica para ningun apoyoo economico")
}