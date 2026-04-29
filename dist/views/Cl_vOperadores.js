import Cl_vEmpleado from "./Cl_vEmpleado.js";
export default class Cl_vOperadores extends Cl_vEmpleado {
    divInHorasExtra;
    inHorasExtra;
    btAceptar;
    constructor() {
        super();
        this.divInHorasExtra = this.crearHTMLElement({ elementName: "divInHorasExtra" });
        this.inHorasExtra = this.crearHTMLInputElement({ elementName: "inHorasExtra" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarOperador",
            onclick: () => this.controlador?.procesarEmpleadoOperador({
                id: this.id,
                nombre: this.nombre,
                sueldoBase: this.sueldoBase,
                horasExtra: this.horasExtra
            }),
        });
    }
    get horasExtra() {
        return +this.inHorasExtra.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Operador" });
        this.inHorasExtra.value = "";
        this.divInHorasExtra.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
//# sourceMappingURL=Cl_vOperadores.js.map