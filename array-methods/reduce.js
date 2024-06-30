// Problema 1: Suma de Elementos
// Dado un array de números, usa un método de array para encontrar la suma de todos los elementos.

const numeros = [1, 2, 3, 4, 5];
const result = numeros.reduce((a, b) => a + b, 0);
console.log(result); // 15

// array.reduce((acumulador, valorActual, indiceActual, array) => {
//   // lógica para reducir el array
// }, valorInicial);

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

// Se lee de la siguiente manera: "Por cada número, "
