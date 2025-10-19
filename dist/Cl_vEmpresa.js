import Cl_vOperadores from "./Cl_vOperadores.js";
import Cl_vDirectores from "./Cl_vDirectores.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
// Define una interfaz para el controlador
export default class Cl_vEmpresa extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vOperadores = new Cl_vOperadores();
        this._vDirectores = new Cl_vDirectores();
        this.dataEmpleado = this.crearHTMLElement({ elementName: "dataEmpleado" });
        this.lblTotalPagado = this.crearHTMLElement({
            elementName: "lblTotalPagado",
        });
        this.lblTotalBonusOperadores = this.crearHTMLElement({
            elementName: "lblTotalBonusOperadores"
        });
        this.lblTotalBonusDirectores = this.crearHTMLElement({
            elementName: "lblTotalBonusDirectores"
        });
        this.btAgregarOperador = this.crearHTMLButtonElement({
            elementName: "btAgregarOperador",
            onclick: () => {
                this.show({ ver: false });
                this.vOperadores.show();
            },
        });
        this.btAgregarDirector = this.crearHTMLButtonElement({
            elementName: "btAgregarDirector",
            onclick: () => {
                this.show({ ver: false });
                this.vDirectores.show();
            },
        });
        this.dataEmpleado.innerHTML = "";
        this.vOperadores.show({ ver: false });
        this.vDirectores.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vOperadores.controlador = controlador;
        this.vDirectores.controlador = controlador;
    }
    get vOperadores() {
        return this._vOperadores;
    }
    get vDirectores() {
        return this._vDirectores;
    }
    reportarEmpleado({ dataEmpleado, totalPagado, totalBonusOperadores, totalBonusDirectores}) {
        this.dataEmpleado.innerHTML += `
      <td class="colNumber">${dataEmpleado.id}</td>
      <td class="colText">${dataEmpleado.nombre}</td>
      <td class="colCurrency">${`$${dataEmpleado.sueldoBase.toFixed(2)}`}</td>
      <td class="colNumber">${dataEmpleado.horasExtra ? dataEmpleado.horasExtra : "--"}</td>
      <td class="colText">${dataEmpleado.turnoNocturno ? dataEmpleado.turnoNocturno.toString() : "--"}</td>
      <td class="colCurrency">${`$${dataEmpleado.bonus.toFixed(2)}`}</td>
      <td class="colCurrency">${`$${dataEmpleado.sueldoMensual.toFixed(2)}`}</td>
    `;
        this.lblTotalPagado.innerHTML = totalPagado.toFixed(2);
        this.lblTotalBonusOperadores.innerHTML = totalBonusOperadores.toFixed(2);
        this.lblTotalBonusDirectores.innerHTML = totalBonusDirectores.toFixed(2);
    } 
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vOperadores.show({ ver: false });
            this.vDirectores.show({ ver: false });
        }
    }
}
