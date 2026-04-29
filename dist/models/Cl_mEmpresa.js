import Cl_mDirectores from "./Cl_mDirectores.js";
import Cl_mOperadores from "./Cl_mOperadores.js";
export default class Cl_mEmpresa {
    acSueldoMensual = 0;
    acBonusOperadores = 0;
    acBonusDirectores = 0;
    procesarEmpleado(empleado) {
        this.acSueldoMensual += empleado.sueldoMensual();
        if (empleado instanceof Cl_mOperadores) {
            this.acBonusOperadores += empleado.bonus();
        }
        else if (empleado instanceof Cl_mDirectores) {
            this.acBonusDirectores += empleado.bonus();
        }
    }
    totalPagado() {
        return this.acSueldoMensual;
    }
    totalBonusOperadores() {
        return this.acBonusOperadores;
    }
    totalBonusDirectores() {
        return this.acBonusDirectores;
    }
}
//# sourceMappingURL=Cl_mEmpresa.js.map