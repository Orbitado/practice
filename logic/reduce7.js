// Ejercicio: Agrupar Personas por Edad
// Dado un array de objetos que representan personas, cada uno con una propiedad nombre y una propiedad edad, utiliza reduce para agrupar las personas por edad. El resultado debe ser un objeto donde las claves son las edades y los valores son arrays de nombres de personas con esa edad.

const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Juan", edad: 16 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 17 },
  { nombre: "Lucas", edad: 16 },
];

const result = personas.reduce((acumulador, persona) => {
  if (!acumulador[persona.edad]) {
    acumulador[persona.edad] = [];
  }

  acumulador[persona.edad].push(persona.nombre);
  return acumulador;
}, {});

console.log(result);
