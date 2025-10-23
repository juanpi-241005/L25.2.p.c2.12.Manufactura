import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mOperadores extends Cl_mEmpleado{
    private _horasExtra: number = 0;
    constructor({id, nombre, sueldoBase, horasExtra}: {id:number, nombre: string, sueldoBase: number, horasExtra: number}){
        super({id, nombre, sueldoBase})
        this.horasExtra = horasExtra;
    }

    set horasExtra(horasExtra: number){
        this._horasExtra = +horasExtra;
    }
    get horasExtra(): number{
        return this._horasExtra;
    }

    prima(): number{
        return (5 * this.horasExtra) + this.bonoNocturno();
    }

    bonoNocturno(){
        return (this.horasExtra > 20 ? 40 : 0)
    }

    bonus(): number{
        return this.prima();
    }

    sueldoMensual(): number{
        return this.sueldoBase + this.prima();
    }

    toJSON() {
     return {
       ...super.toJSON(),
       horasExtra: this.horasExtra,
    };
  } 
}