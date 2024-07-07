// Ejercicio: Agrupar por Inicial
// Dado un array de objetos que representan personas, cada uno con una propiedad nombre, usa los métodos de array para agrupar a las personas por la inicial de su nombre. El resultado debe ser un objeto donde las claves son las iniciales y los valores son arrays de nombres que comienzan con esa inicial.

const personas = [
  { nombre: "Ana" },
  { nombre: "Juan" },
  { nombre: "María" },
  { nombre: "Pedro" },
  { nombre: "Alberto" },
  { nombre: "Juana" },
];

const result = personas.reduce((acumulador, persona) => {
  const inicial = persona.nombre[0];
  if (!acumulador[inicial]) {
    acumulador[inicial] = [];
  }
  acumulador[inicial].push(persona.nombre);
  return acumulador;
}, {});

console.log(result);

// if (!acumulador[palabra]) {
//     acumulador[palabra] = 1;
//   }
