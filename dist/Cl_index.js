/* 12.MANUFACTURA
En una empresa de manufactura se conoce de cada empleado su cedula, nombre y sueldo base mensual.
También se sabe que hay empleados operador y directivo. A los operadores se les asigna una prima
de $5 por cantidad de horas extras trabajadas. A los empleados directivos se les paga adicional
un 20% del sueldo si es turno nocturno. Se requiere un programa que determine: a) por empleado
el sueldo mensual y b) por la empresa: Monto total pagado a sus empleados, Monto adicional pagado
a operadores y a Directivos.*/
import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vEmpresa from "./Cl_vEmpresa.js";
import Cl_mOperadores from "./Cl_mOperadores.js";
import Cl_mDirectores from "./Cl_mDirectores.js";
import { empleadosOperadores, empleadosDirectores } from "./_data.js";
export default class Cl_index {
    constructor() {
        let vista = new Cl_vEmpresa();
        let modelo = new Cl_mEmpresa();
        this.controlador = new Cl_controlador(modelo, vista);
        vista.controlador = this.controlador;
        this.iniciarData();
    }
    iniciarData() {
        this.controlador.procesarEmpleadoOperador(new Cl_mOperadores(empleadosOperadores[0]));
        this.controlador.procesarEmpleadoOperador(new Cl_mOperadores(empleadosOperadores[1]));
        this.controlador.procesarEmpleadoOperador(new Cl_mOperadores(empleadosOperadores[2]));
        this.controlador.procesarEmpleadoOperador(new Cl_mOperadores(empleadosOperadores[3]));
        this.controlador.procesarEmpleadoDirector(new Cl_mDirectores(empleadosDirectores[0]));
        this.controlador.procesarEmpleadoDirector(new Cl_mDirectores(empleadosDirectores[1]));
        this.controlador.procesarEmpleadoDirector(new Cl_mDirectores(empleadosDirectores[2]));
        this.controlador.procesarEmpleadoDirector(new Cl_mDirectores(empleadosDirectores[3]));
    }
}
