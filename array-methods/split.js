// Problema 16: Crear una Cadena de Nombres Separados por Comas
// Dado un array de objetos, cada uno con una propiedad nombre, crea una cadena de texto que contenga todos los nombres, separados por comas.

const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Juan", edad: 16 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 17 },
];

const map = personas.map((persona) => persona.nombre);
const result = map.join(", ");
console.log(result);
