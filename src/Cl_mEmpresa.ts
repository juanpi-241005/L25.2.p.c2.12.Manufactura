import Cl_mDirectores from "./Cl_mDirectores.js";
import Cl_mEmpleado from "./Cl_mEmpleado.js";
import Cl_mOperadores from "./Cl_mOperadores.js";

export default class Cl_mEmpresa{
    private acSueldoMensual: number = 0;
    private acBonusOperadores: number = 0;
    private acBonusDirectores: number = 0;

    procesarEmpleado(empleado: Cl_mEmpleado){
        this.acSueldoMensual += empleado.sueldoMensual();

        if(empleado instanceof Cl_mOperadores){
            this.acBonusOperadores += empleado.bonus();
        } else if(empleado instanceof Cl_mDirectores){
            this.acBonusDirectores += empleado.bonus();
        }
    }

    totalPagado(): number{
        return this.acSueldoMensual;
    }
    totalBonusOperadores(): number{
        return this.acBonusOperadores;
    }
    totalBonusDirectores(): number{
        return this.acBonusDirectores;
    }
}