export default class Cl_mEmpresa{
    constructor(){
        this.acSueldoMensual = 0;
        this.acPrima = 0;
        this.acAdicional = 0;
    }

    procesarEmpleado(empleado){
        this.acSueldoMensual += empleado.sueldoMensual();
    }

    totalPagado(){
        return this.acSueldoMensual;
    }
}