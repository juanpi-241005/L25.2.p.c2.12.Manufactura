import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_mEmpleado from "./Cl_mEmpleado.js";
import Cl_mOperadores from "./Cl_mOperadores.js";
import Cl_mDirectores from "./Cl_mDirectores.js";
import Cl_vEmpresa from "./Cl_vEmpresa.js";
import { iOperadores } from "./Cl_vOperadores.js";
import { iDirectores } from "./Cl_vDirectores.js";

export default class Cl_controlador {
    public modelo: Cl_mEmpresa;
    public vista: Cl_vEmpresa;
    constructor(modelo: Cl_mEmpresa, vista: Cl_vEmpresa) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarEmpleadoOperador(data: iOperadores){
    let mOperadores = new Cl_mOperadores({
        id: data.id,
        nombre: data.nombre,
        sueldoBase: data.sueldoBase,
        horasExtra: data.horasExtra,
    });
    this.modelo.procesarEmpleado(mOperadores);
    this.reportarEmpleado({ mEmpleado: mOperadores});
  }
  procesarEmpleadoDirector(data: iDirectores){
    let mDirectores = new Cl_mDirectores({
        id: data.id,
        nombre: data.nombre,
        sueldoBase: data.sueldoBase,
        turnoNocturno: data.turnoNocturno,
    });
    this.modelo.procesarEmpleado(mDirectores);
    this.reportarEmpleado({ mEmpleado: mDirectores});
  }
  reportarEmpleado({ mEmpleado }: { mEmpleado: Cl_mEmpleado }) {
    this.vista.reportarEmpleado({
      dataEmpleado: mEmpleado.toJSON(),
      totalPagado: this.modelo.totalPagado(),
      totalBonusOperadores: this.modelo.totalBonusOperadores(),
      totalBonusDirectores: this.modelo.totalBonusDirectores(),
    });
    this.vista.show();
  }
}