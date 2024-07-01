// Problema 26: Contar la Frecuencia de Palabras en una Frase
// Dada una frase (string), cuenta la frecuencia de cada palabra y devuelve un objeto donde las claves son las palabras y los valores son las frecuencias.

const frase = "Hola mundo hola a todos todos";

const op = frase.toLowerCase().split(" ");
const result = op.reduce((acumulador, palabra) => {
  if (!acumulador[palabra]) {
    acumulador[palabra] = 1;
  } else {
    acumulador[palabra]++;
  }
  return acumulador;
}, {});

console.log(result);
