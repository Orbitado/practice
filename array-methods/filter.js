// Problema 2: Filtrar Números Pares
// Dado un array de números, usa un método de array para crear un nuevo array que contenga solo los números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numeros.filter((numero) => numero % 2 === 0);

console.log(result);

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

// Se lee de la siguiente manera: "Por cada elemento del arreglo números, devuélveme el número que sea divisible por 2."
