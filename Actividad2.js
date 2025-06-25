const pagoHora = 30;
const pagoHoraExtra = 31;
const descuentoFalta = 30;

let horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas:"));
let horasExtra = parseInt(prompt("Ingrese la cantidad de horas extra:"));
let faltas = parseInt(prompt("Ingrese la cantidad de faltas:"));

if (
  isNaN(horas) || horas < 0 ||
  isNaN(horasExtra) || horasExtra < 0 ||
  isNaN(faltas) || faltas < 0 
) {
  console.log("Ingrese numeros positivos.");
} else {
  let sueldoTotal = (horas * pagoHora) + (horasExtra * pagoHoraExtra) - (faltas * descuentoFalta);
  console.log("El sueldo total del empleado: S/." + sueldoTotal);
}
