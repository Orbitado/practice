// Problema 18: Crear un Array de Edades Incrementadas
// Dado un array de objetos, cada uno con una propiedad edad, crea un nuevo array en el que cada edad se haya incrementado en 1.

const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Juan", edad: 16 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 17 },
];

const result = personas.map((persona) => persona.edad + 1);

console.log(result);
