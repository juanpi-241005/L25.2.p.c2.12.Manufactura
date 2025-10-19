import Cl_vEmpleado from "./Cl_vEmpleado.js";

export default class Cl_vDirectivos extends Cl_vEmpleado {
    constructor() {
        super();
        this.divInTurnoNocturno = this.crearHTMLElement({ elementName: "divInTurnoNocturno" });
        this.inTurnoNocturno = this.crearHTMLInputElement({ elementName: "inTurnoNocturno" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarDirector",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarEmpleadoDirector({
                    id: this.id,
                    nombre: this.nombre,
                    sueldoBase: this.sueldoBase,
                    turnoNocturno: this.turnoNocturno
                });
            },
        });
    }
    get turnoNocturno() {
        return this.inTurnoNocturno.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Directivo" });
        this.inTurnoNocturno.value = "";
        this.divInTurnoNocturno.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}