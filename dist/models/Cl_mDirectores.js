import Cl_mEmpleado from "./Cl_mEmpleado.js";
export default class Cl_mDirectores extends Cl_mEmpleado {
    _turnoNocturno = false;
    constructor({ id, nombre, sueldoBase, turnoNocturno }) {
        super({ id, nombre, sueldoBase });
        this.turnoNocturno = turnoNocturno;
    }
    set turnoNocturno(turnoNocturno) {
        this._turnoNocturno = turnoNocturno;
    }
    get turnoNocturno() {
        return this._turnoNocturno;
    }
    adicional() {
        return super.sueldoBase * (this.turnoNocturno === true ? 0.20 : 0);
    }
    bonus() {
        return this.adicional();
    }
    sueldoMensual() {
        return super.sueldoMensual() + this.adicional();
    }
    toJSON() {
        return {
            ...super.toJSON(),
            turnoNocturno: this.turnoNocturno,
        };
    }
}
//# sourceMappingURL=Cl_mDirectores.js.map