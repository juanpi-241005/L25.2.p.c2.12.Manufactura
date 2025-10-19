import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mOperadores extends Cl_mEmpleado{
    constructor({id, nombre, sueldoBase, horasExtra}){
        super({id, nombre, sueldoBase})
        this._horasExtra = 0;
        this.horasExtra = horasExtra;
    }

    set horasExtra(horasExtra){
        this._horasExtra = +horasExtra;
    }
    get horasExtra(){
        return this._horasExtra;
    }

    prima(){
        return this.horasExtra * 5;
    }

    sueldoMensual(){
        return this.sueldoBase + this.prima();
    }

    bonus(){
        return this.prima();
    }

    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { horasExtra: this.horasExtra });
    }
}