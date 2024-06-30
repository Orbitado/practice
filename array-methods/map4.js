// Problema 15: Crear una Nueva Lista con Nombres en Mayúsculas
// Dado un array de objetos, cada uno con una propiedad nombre, crea un nuevo array que contenga solo los nombres, pero en mayúsculas.

const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Juan", edad: 16 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 17 },
];

const result = personas.map((persona) => persona.nombre.toUpperCase());

console.log(result);
