// Problema 8: Encontrar el Índice de un Elemento
// Dado un array de números, usa un método de array para encontrar el índice del primer elemento que sea mayor a 5.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numeros.findIndex((num) => num > 5);

console.log(result);
