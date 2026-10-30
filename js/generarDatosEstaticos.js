import * as gp from './gestionPresupuesto'
import * as gpw from './gestionPresupuestoWeb'
gp.actualizarPresupuesto(1500)
gp.mostrarPresupuesto(document.getElementById("presupuesto"))
gpw.mostrarDatoEnId(document.getElementById("presupuesto"),1500)
