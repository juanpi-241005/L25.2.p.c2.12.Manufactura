import Cl_vEmpleado from "./Cl_vEmpleado.js";
interface iDirectores {
  id: number;
  nombre: string;
  sueldoBase: number;
  turnoNocturno: string;
}

export default class Cl_vDirectores extends Cl_vEmpleado {
  private divInTurnoNocturno: HTMLElement;
  private inTurnoNocturno: HTMLInputElement;
  private btAceptar: HTMLElement;
  constructor() {
    super();
    this.divInTurnoNocturno = this.crearHTMLElement({ elementName: "divInTurnoNocturno" });
    this.inTurnoNocturno = this.crearHTMLInputElement({ elementName: "inTurnoNocturno" });
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
  get turnoNocturno(): string {
    return this.inTurnoNocturno.value;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Director" });
    this.inTurnoNocturno.value = "";
    this.divInTurnoNocturno.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iDirectores };
