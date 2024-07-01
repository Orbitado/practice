// Problema: Contar la Frecuencia de Letras en una Cadena
// Dada una cadena de texto, cuenta la frecuencia de cada letra y devuelve un objeto donde las claves son las letras y los valores son las frecuencias.

const texto = "abracadabra";

const op = texto.toLowerCase().split("");
const result = op.reduce((acumulador, letra) => {
  if (!acumulador[letra]) {
    acumulador[letra] = 1;
  } else {
    acumulador[letra]++;
  }
  return acumulador;
}, {});

console.log(result);
