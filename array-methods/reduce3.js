// Problema 14: Encontrar el Promedio de Edades
// Dado un array de objetos, cada uno con una propiedad edad, usa un método de array para calcular el promedio de todas las edades.

const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Juan", edad: 16 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 17 },
];

const result = personas.reduce((a, persona) => a + persona.edad, 0);
const avg = parseInt(result / personas.length);

console.log(avg);
