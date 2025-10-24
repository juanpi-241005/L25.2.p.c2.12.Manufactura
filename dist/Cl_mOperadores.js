import Cl_mEmpleado from "./Cl_mEmpleado.js";
export default class Cl_mOperadores extends Cl_mEmpleado {
    constructor({ id, nombre, sueldoBase, horasExtra }) {
        super({ id, nombre, sueldoBase });
        this._horasExtra = 0;
        this.horasExtra = horasExtra;
    }
    set horasExtra(horasExtra) {
        this._horasExtra = +horasExtra;
    }
    get horasExtra() {
        return this._horasExtra;
    }
    prima() {
        return (5 * this.horasExtra) + this.bonoNocturno();
    }
    bonoNocturno() {
        return (this.horasExtra > 20 ? 40 : 0);
    }
    bonus() {
        return this.prima();
    }
    sueldoMenosCuotaSindical() {
        return this.sueldoBase * 0.98;
    }
    sueldoMensual() {
        return this.sueldoMenosCuotaSindical() + this.prima();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { horasExtra: this.horasExtra });
    }
}
