function calcularDevengado(salario, bonificacion, prima){
    return salario + bonificacion + prima
}
function calcularDeducido(seguridadS, prestamo){
    return seguridadS + prestamo
}
function calcularPorcentajeRetencion(salario){
    if(salario > 100){
        return 0.03
    }else{
        return 0
    }
}
function principal(){
    let salario = calcularDevengado(9, 5, 2) - calcularDeducido(4,5)
    salario -= calcularPorcentajeRetencion(salario)
}
