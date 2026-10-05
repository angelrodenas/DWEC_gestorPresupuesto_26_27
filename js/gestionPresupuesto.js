`user strict`
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0
let gastos = []
let idGasto = 0

function actualizarPresupuesto(value) {
    if(value <= 0 || typeof value !== 'number'){
        console.log("Ha ocurrido un error")
       return -1
    }
    else{
        presupuesto = value
        return presupuesto
    }

}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`
}

function CrearGasto(descripcion,valor,fecha,...etiquetas) {
    this.descripcion = descripcion
    this.fecha = fecha
    if(!isNaN(Date.parse(fecha)) && typeof fecha === 'string'){
        this.fecha = Date.parse(fecha)
    }else{
        this.fecha =  Date.now()
    }
        
    
    if(typeof valor !== 'number' || valor < 0){
        this.valor = 0
    }
    else
    {
        this.valor = valor
    }
    this.mostrarGasto = function(){
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`
    }
    this.actualizarDescripcion = function(texto){
        this.descripcion = texto
    }
    this.actualizarValor = function(num){
        if(typeof num === 'number' && num > 0){
            this.valor = num
        }
    }
    this.etiquetas = []
    this.anyadirEtiquetas = function(...nuevasEtiquetas){
        for(let etiqueta of nuevasEtiquetas){
            if(!this.etiquetas.includes(etiqueta)){
                this.etiquetas.push(etiqueta)
            }
        }
    }
    if(etiquetas.length > 0){
        this.anyadirEtiquetas(...etiquetas)
    }
    this.actualizarFecha = function(nuevaFecha){
        if(typeof nuevaFecha === 'string'){
            let timestamp = Date.parse(nuevaFecha) 
            if(!isNaN(timestamp)){
                this.fecha = timestamp
            }
        }
    }
    this.mostrarGastoCompleto = function(){
        let texto =  `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\n` 
        texto += `Fecha: ${new Date(this.fecha).toLocaleString()}\n`
        texto += "Etiquetas \n"
        for(let etiqueta of this.etiquetas){
            texto += '- ${etiqueta} \n'
        }
        return texto
    }
}

function listarGastos(){
    return gastos
}
function anyadirGasto(id){
    
}
function borrarGasto(){

}
function calcularTotalGastos(){
    let suma = 0
    for(let i = 0; i < gastos.length;i++){
        suma += gastos[i]
    }
    return

}
function calcularBalance(){

}
// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto, 
    borrarGasto, 
    calcularTotalGastos, 
    calcularBalance
}
