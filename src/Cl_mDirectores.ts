import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mDirectores extends Cl_mEmpleado{
    private _turnoNocturno: string = ""
    constructor({id, nombre, sueldoBase, turnoNocturno}: {id: number, nombre: string, sueldoBase: number, turnoNocturno: string}){
        super({id, nombre, sueldoBase})
        this.turnoNocturno = turnoNocturno
    }

    set turnoNocturno(turnoNocturno: string){
        this._turnoNocturno = turnoNocturno;
    }
    get turnoNocturno(): string{
        return this._turnoNocturno;
    }

    adicional(): number{
        return this.sueldoBase * (this.turnoNocturno === "SI" ? 0.20 : 0);
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