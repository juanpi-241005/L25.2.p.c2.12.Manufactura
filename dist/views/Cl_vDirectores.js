import Cl_vEmpleado from "./Cl_vEmpleado.js";
export default class Cl_vDirectores extends Cl_vEmpleado {
    divInTurnoNocturno;
    inTurnoNocturnoS;
    inTurnoNocturnoN;
    btAceptar;
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
            onclick: () => this.controlador?.procesarEmpleadoDirector({
                id: this.id,
                nombre: this.nombre,
                sueldoBase: this.sueldoBase,
                turnoNocturno: this.turnoNocturno
            }),
        });
    }
    get turnoNocturno() {
        return this.inTurnoNocturnoS.checked;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Director" });
        this.inTurnoNocturnoN.checked = true;
        this.inTurnoNocturnoS.checked = false;
        this.divInTurnoNocturno.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
//# sourceMappingURL=Cl_vDirectores.js.map