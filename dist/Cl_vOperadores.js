import Cl_vEmpleado from "./Cl_vEmpleado.js";
export default class Cl_vOperadores extends Cl_vEmpleado {
    constructor() {
        super();
        this.divInHorasExtra = this.crearHTMLElement({ elementName: "divInHorasExtra" });
        this.inHorasExtra = this.crearHTMLInputElement({ elementName: "inHorasExtra" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarOperador",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarEmpleadoOperador({
                    id: this.id,
                    nombre: this.nombre,
                    sueldoBase: this.sueldoBase,
                    horasExtra: this.horasExtra
                });
            },
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
