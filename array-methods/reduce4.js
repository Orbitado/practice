// Problema 19: Filtrar Números Mayores que el Promedio
// Dado un array de números, encuentra el promedio de todos los números y luego crea un nuevo array que contenga solo los números mayores que ese promedio.

const numeros = [10, 5, 20, 8, 15];

const result = parseInt(numeros.reduce((a, b) => a + b, 0) / numeros.length);
console.log(result);
