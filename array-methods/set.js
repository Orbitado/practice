// Problema 10: Eliminar Elementos Duplicados
// Dado un array de números, usa métodos de array para eliminar los elementos duplicados y crear un nuevo array con solo elementos únicos.

const numeros = [1, 2, 2, 3, 4, 4, 5];

const result = [...new Set(numeros)];

console.log(result);
