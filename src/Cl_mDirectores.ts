import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mDirectores extends Cl_mEmpleado{
    private _turnoNocturno: boolean = false;
    constructor({id, nombre, sueldoBase, turnoNocturno}: {id: number, nombre: string, sueldoBase: number, turnoNocturno: boolean}){
        super({id, nombre, sueldoBase})
        this.turnoNocturno = turnoNocturno
    }

    set turnoNocturno(turnoNocturno: boolean){
        this._turnoNocturno = turnoNocturno;
    }
    get turnoNocturno(): boolean{
        return this._turnoNocturno;
    }

    adicional(): number{
        return this.sueldoBase * (this.turnoNocturno === true ? 0.20 : 0);
    }

    bonus(): number{
        return this.adicional();
    }

    sueldoMensual(): number{
        return this.sueldoBase + this.adicional();
    }

    toJSON() {
     return {
       ...super.toJSON(),
       turnoNocturno: this.turnoNocturno,
    };
  } 
}