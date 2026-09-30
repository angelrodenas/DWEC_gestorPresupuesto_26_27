`user strict`
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let _presupuesto = 0

function actualizarPresupuesto(presupuesto) {
    if(presupuesto <= 0 && typeof presupuesto !== 'number'){
        console.log("Ha ocurrido un error")
       return -1
    }
    else{
        _presupuesto = presupuesto
        return _presupuesto
    }
    console.log(presupuesto)

}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${_presupuesto} €`
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
