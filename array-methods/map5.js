// Problema 17: Contar la Cantidad de Números Pares
// Dado un array de números, queremos contar cuántos de esos números son pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const map = numeros.filter((numero) => numero % 2 === 0);

const result = map.length;

console.log(result);
