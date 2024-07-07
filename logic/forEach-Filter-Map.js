// Ejercicio: Transformar y Filtrar una Lista de Objetos
// Dado un array de objetos que representan empleados, cada uno con una propiedad nombre y una propiedad salario, usa los métodos de array para:

// Incrementar el salario de cada empleado en un 10%.
// Filtrar los empleados que tienen un salario superior a $2000 después del incremento.
// Transformar el array filtrado en un nuevo array que contenga solo los nombres de los empleados con salario superior a $2000.

const empleados = [
  { nombre: "Ana", salario: 1800 },
  { nombre: "Juan", salario: 2200 },
  { nombre: "María", salario: 1700 },
  { nombre: "Pedro", salario: 2400 },
];

empleados.forEach((empleado) => (empleado.salario += empleado.salario * 0.1));

const result = empleados.filter((empleado) => empleado.salario > 2000);
const array = result.map((empleado) => empleado.nombre);

console.log(empleados);
console.log(result);
console.log(array);
