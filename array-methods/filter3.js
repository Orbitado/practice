// Problema 13: Filtrar Objetos por Propiedad
// Dado un array de objetos, cada uno con propiedades nombre y edad, usa un método de array para filtrar todos los objetos que tengan una edad mayor o igual a 18.

const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Juan", edad: 16 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 17 },
];

const result = personas.filter((persona) => persona.edad >= 18);

console.log(result);
