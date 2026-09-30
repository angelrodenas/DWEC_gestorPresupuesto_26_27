`user strict`
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let _presupuesto = 0

function actualizarPresupuesto(value) {
    
    if(value < 0){
        console.log("Ha ocurrido un error")
        _presupuesto = -1
    }
    else{
        _presupuesto = value
    }
    console.log(value)
    return _presupuesto
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${_presupuesto} €.`
}

function CrearGasto(num) {

}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
