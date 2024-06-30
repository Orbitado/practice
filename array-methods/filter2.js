// Problema 7: Contar Números Pares
// Dado un array de números, usa un método de array para contar cuántos números pares hay en el array.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const peers = numeros.filter((numero) => numero % 2 === 0);

const result = peers.length;

console.log(result); // 5
