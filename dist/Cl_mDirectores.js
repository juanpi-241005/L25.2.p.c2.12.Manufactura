import Cl_mEmpleado from "./Cl_mEmpleado.js";
export default class Cl_mDirectores extends Cl_mEmpleado {
    constructor({ id, nombre, sueldoBase, turnoNocturno }) {
        super({ id, nombre, sueldoBase });
        this._turnoNocturno = false;
        this.turnoNocturno = turnoNocturno;
    }
    set turnoNocturno(turnoNocturno) {
        this._turnoNocturno = turnoNocturno;
    }
    get turnoNocturno() {
        return this._turnoNocturno;
    }
    adicional() {
        return this.sueldoBase * (this.turnoNocturno === true ? 0.20 : 0);
    }
    bonus() {
        return this.adicional();
    }
    sueldoMensual() {
        return this.sueldoBase + this.adicional();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { turnoNocturno: this.turnoNocturno });
    }
}
