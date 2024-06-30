// Problema 5: Verificar si Todos los Números Son Positivos
// Dado un array de números, usa un método de array para verificar si todos los números en el array son positivos (mayores que 0).

const numeros = [3, 7, 12, 5, 20, 8];

const result = numeros.every((number) => number > 0);

console.log(result);
