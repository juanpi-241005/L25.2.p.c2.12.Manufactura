import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mEmpresa{
    private acSueldoMensual: number = 0;

    procesarEmpleado(empleado: Cl_mEmpleado){
        this.acSueldoMensual += empleado.sueldoMensual();
    }

    totalPagado(): number{
        return this.acSueldoMensual;
    }
}