import Cl_vEmpleado from "./Cl_vEmpleado.js";

export default class Cl_vDirectivos extends Cl_vEmpleado {
    constructor() {
        super();
        this.divInTurnoNocturno = this.crearHTMLElement({ elementName: "divInTurnoNocturno" });
        this.inTurnoNocturnoS = this.crearHTMLInputElement({
            elementName: "inTurnoNocturnoS",
            type: "radio"
        });
        this.inTurnoNocturnoN = this.crearHTMLInputElement({
            elementName: "inTurnoNocturnoN",
            type: "radio"
        });
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
        return this.inTurnoNocturnoS.checked;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Directivo" });
        this.inTurnoNocturnoN.checked = true;
        this.inTurnoNocturnoS.checked = false;
        this.divInTurnoNocturno.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}