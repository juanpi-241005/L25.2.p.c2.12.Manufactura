export default class Cl_mEmpleado{
    public _id: number = 0;
    public _nombre: string = "";
    public _sueldoBase: number = 0;
    constructor({id, nombre, sueldoBase}: {id: number, nombre: string, sueldoBase: number}){
        this.id = id;
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }

    set id(id: number){
        this._id = +id;
    }
    get id(): number{
        return this._id;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }
    get nombre(): string{
        return this._nombre;
    }

    set sueldoBase(sueldoBase: number){
        this._sueldoBase = +sueldoBase;
    }
    get sueldoBase(): number{
        return this._sueldoBase;
    }

    sueldoMensual(): number{
        return 0;
    }

    bonoNocturno(): number{
        return 0;
    }

    bonus(): number{
        return 0;
    }

    toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      sueldoBase: this.sueldoBase,
      sueldoMensual: this.sueldoMensual(),
      bonus: this.bonus(),
      bonoNocturno: this.bonoNocturno(),
    };
  }    
}