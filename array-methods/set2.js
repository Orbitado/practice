// Problema 22: Eliminar Duplicados de un Array
// Dado un array que puede contener elementos duplicados, crea un nuevo array que contenga solo los elementos únicos (sin duplicados).

const array = [1, 2, 3, 4, 2, 1, 5];

const result = [...new Set(array)];
console.log(result);
