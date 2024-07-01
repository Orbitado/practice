// Ejercicio: Calcular la Frecuencia de las Palabras en una Frase
// Dada una frase, utiliza reduce para contar la frecuencia de cada palabra en la frase. Ignora las mayúsculas y minúsculas (es decir, "Hola" y "hola" deben ser considerados la misma palabra).

const frase = "Hola mundo hola mundo";

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
// console.log(result);
