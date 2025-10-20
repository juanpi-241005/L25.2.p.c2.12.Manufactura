export default class Cl_mEmpleado {
    constructor({ id, nombre, sueldoBase }) {
        this._id = 0;
        this._nombre = "";
        this._sueldoBase = 0;
        this.id = id;
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
    set id(id) {
        this._id = +id;
    }
    get id() {
        return this._id;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set sueldoBase(sueldoBase) {
        this._sueldoBase = +sueldoBase;
    }
    get sueldoBase() {
        return this._sueldoBase;
    }
    sueldoMensual() {
        return 0;
    }
    bonus() {
        return 0;
    }
    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
            sueldoBase: this.sueldoBase,
            sueldoMensual: this.sueldoMensual(),
            bonus: this.bonus(),
        };
    }
}
