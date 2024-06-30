// Problema 24: Encontrar la Intersección de Dos Arrays
// Dado dos arrays, encuentra y muestra los elementos que están presentes en ambos arrays.

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = array1.filter((valor) => array2.includes(valor));

console.log(intersection);
