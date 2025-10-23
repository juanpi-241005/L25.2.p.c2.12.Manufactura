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
    sueldoMenosCuotaSindical() {
        return this.sueldoBase * 0.98;
    }
    adicional() {
        return this.sueldoMenosCuotaSindical() * (this.turnoNocturno === true ? 0.20 : 0);
    }
    bonus() {
        return this.adicional();
    }
    sueldoMensual() {
        return this.sueldoMenosCuotaSindical() + this.adicional();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { turnoNocturno: this.turnoNocturno });
    }
}
