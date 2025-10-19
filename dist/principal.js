"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });

const Cl_vEmpresa_js_1 = __importDefault(require("./Cl_vEmpleado.js"));
const Cl_mEmpresa_js_1 = __importDefault(require("./Cl_mEmpresa.js"));
const Cl_controlador_js_1 = __importDefault(require("./Cl_controlador.js"));
class Cl_principal {
  constructor() {
    let vista = new Cl_vEmpresa_js_1.default();
    let modelo = new Cl_mEmpresa_js_1.default();
    let controlador = new Cl_controlador_js_1.default(modelo, vista);
    vista.controlador = controlador;
  }
}
exports.default = Cl_principal;
