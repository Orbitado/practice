// Problema 15: Ordenar Objetos por Propiedad
// Dado un array de objetos, cada uno con una propiedad nombre de tipo string, usa un método de array para ordenar los objetos alfabéticamente por el valor de la propiedad nombre.

const personas = [
  { nombre: "Ana" },
  { nombre: "Pedro" },
  { nombre: "María" },
  { nombre: "Juan" },
];

const result = personas.sort((a, b) => {
  if (a.nombre < b.nombre) return -1;
  if (a.nombre > b.nombre) return 1;
  return 0;
});

// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

// En JavaScript, las comparaciones de cadenas de texto se comparan carácter por carácter, según su valor Unicode. Se acumula el valor de una cadena carácter por carácter. Si el resultado de la suma es igual, significa que son iguales.
// ¿"Hola" es menor que "Adiós"? true
// ¿"Hola" es mayor que "Adiós"? false
// ¿"Hola" es igual a "Hola"? true

// Hola < Adios
// U+01D4 < U+0207

console.log(result);
