import Cl_vEmpleado from "./Cl_vEmpleado.js";
interface iDirectores {
  id: number;
  nombre: string;
  sueldoBase: number;
  turnoNocturno: boolean;
}

export default class Cl_vDirectores extends Cl_vEmpleado {
  private divInTurnoNocturno: HTMLElement;
  private inTurnoNocturnoS: HTMLInputElement;
  private inTurnoNocturnoN: HTMLInputElement;
  private btAceptar: HTMLElement;
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
  get turnoNocturno(): boolean {
    return this.inTurnoNocturnoS.checked;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Director" });
    this.inTurnoNocturnoN.checked = true;
    this.inTurnoNocturnoS.checked = false;
    this.divInTurnoNocturno.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iDirectores };
