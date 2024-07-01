// Problema 25: Ordenar un Array de Objetos por Varias Propiedades
// Dado un array de objetos, ordena el array primero por una propiedad (por ejemplo, edad) en orden ascendente. Si dos objetos tienen la misma edad, ordénalos por una segunda propiedad (por ejemplo, nombre) en orden alfabético.

const personas = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 25 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Luis", edad: 30 },
];

const op = personas.sort((a, b) => {
  if (a.edad < b.edad) return -1;
  if (a.edad > b.edad) return 1;
  if (a.edad === b.edad) {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
  }
  return 0;
});

console.log(op);
