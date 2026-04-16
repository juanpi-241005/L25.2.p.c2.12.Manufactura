import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vEmpleado extends Cl_vGeneral {
  private inId: HTMLInputElement;
  private inNombre: HTMLInputElement;
  private inSueldoBase: HTMLInputElement;
  private lblTipo: HTMLElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    super({ formName: "empleadoForm" });
    this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
    this.inId = this.crearHTMLInputElement({ elementName: "inId" });
    this.inNombre = this.crearHTMLInputElement({
      elementName: "inNombre",
    });
    this.inSueldoBase = this.crearHTMLInputElement({
      elementName: "inSueldoBase",
    });
    this.btCancelar = this.crearHTMLButtonElement({
      elementName: "btCancelar",
      onclick: () => {
        this.show({ ver: false });
        this.controlador?.vista.show();
      },
    });
  }
  get id(): number {
    return +this.inId.value;
  }
  get nombre(): string {
    return this.inNombre.value;
  }
  get sueldoBase(): number {
    return +this.inSueldoBase.value;
  }
  show({
    ver = true,
    nombreTipo = "",
  }: {
    ver?: boolean;
    nombreTipo?: string;
  }): void {
    super.show({ ver });
    this.lblTipo.innerHTML = nombreTipo;
    this.inId.value = "";
    this.inNombre.value = "";
    this.inSueldoBase.value = "";
    this.inId.focus();
  }
}
