import Cl_mEmpleado from "./Cl_mEmpleado.js";
export default class Cl_mOperadores extends Cl_mEmpleado {
    _horasExtra = 0;
    constructor({ id, nombre, sueldoBase, horasExtra }) {
        super({ id, nombre, sueldoBase });
        this.horasExtra = horasExtra;
    }
    set horasExtra(horasExtra) {
        this._horasExtra = +horasExtra;
    }
    get horasExtra() {
        return this._horasExtra;
    }
    prima() {
        return (5 * this.horasExtra);
    }
    bonus() {
        return this.prima();
    }
    sueldoMensual() {
        return super.sueldoMensual() + this.prima();
    }
    toJSON() {
        return {
            ...super.toJSON(),
            horasExtra: this.horasExtra,
        };
    }
}
//# sourceMappingURL=Cl_mOperadores.js.map