
interface iOperadores {
  id: number;
  nombre: string;
  sueldoBase: number;
  horasExtra: number;
}
interface iDirectores {
  id: number;
  nombre: string;
  sueldoBase: number;
  turnoNocturno: string;
}
let empleadosOperadores: iOperadores[], empleadosDirectores: iDirectores[];
empleadosOperadores = [
  { id: 11, nombre: "Luis", sueldoBase: 100, horasExtra: 10 },
  { id: 77, nombre: "Ray", sueldoBase: 160, horasExtra: 20 },
  { id: 55, nombre: "Leo", sueldoBase: 50, horasExtra: 25 },
  { id: 66, nombre: "Joe", sueldoBase: 200, horasExtra: 15 },
];
empleadosDirectores = [
  { id: 22, nombre: "Ana", sueldoBase: 100, turnoNocturno: "NO" },
  { id: 44, nombre: "Eva", sueldoBase: 50, turnoNocturno: "SI" },
  { id: 33, nombre: "Liz", sueldoBase: 200, turnoNocturno: "SI" },
  { id: 88, nombre: "Emy", sueldoBase: 100, turnoNocturno: "NO" },
];
export { empleadosOperadores, empleadosDirectores };
