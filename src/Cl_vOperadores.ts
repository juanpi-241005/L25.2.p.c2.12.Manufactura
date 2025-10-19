import Cl_vEmpleado from "./Cl_vEmpleado.js";
interface iOperadores {
  id: number;
  nombre: string;
  sueldoBase: number;
  horasExtra: number;
}

export default class Cl_vOperadores extends Cl_vEmpleado {
    private divInHorasExtra: HTMLElement;
    private inHorasExtra: HTMLInputElement;
    private btAceptar: HTMLElement;
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
    get horasExtra(): number {
        return +this.inHorasExtra.value;
    }
    show({ ver = true }: { ver?: boolean } = { ver: true }) {
        super.show({ ver, nombreTipo: "Operador" });
        this.inHorasExtra.value = "";
        this.divInHorasExtra.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
export {iOperadores};
