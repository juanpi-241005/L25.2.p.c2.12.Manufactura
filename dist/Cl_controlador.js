import Cl_mDirectores from "./Cl_mDirectores.js";
import Cl_mOperadores from "./Cl_mOperadores.js";

export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarEmpleadoOperador(data) {
        let mOperadores = new Cl_mOperadores({
            id: data.id,
            nombre: data.nombre,
            sueldoBase: data.sueldoBase,
            horasExtra: data.horasExtra,
        });
        this.modelo.procesarEmpleado(mOperadores);
        this.reportarEmpleado({ mEmpleado: mOperadores });
    }
    procesarEmpleadoDirector(data) {
        let mDirectores = new Cl_mDirectores({
            id: data.id,
            nombre: data.nombre,
            sueldoBase: data.sueldoBase,
            turnoNocturno: data.turnoNocturno,
        });
        this.modelo.procesarEmpleado(mDirectores);
        this.reportarEmpleado({ mEmpleado: mDirectores });
    }
    reportarEmpleado({ mEmpleado }) {
        this.vista.reportarEmpleado({
            dataEmpleado: mEmpleado.toJSON(),
            totalPagado: this.modelo.totalPagado(),
        });
        this.vista.show();
    }
}
