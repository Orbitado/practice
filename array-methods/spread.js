// Problema 21: Combinar Dos Arrays
// Dado dos arrays, combínalos en uno solo de manera que los elementos del segundo array estén al final del primer array.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];
// const array3 = array1.concat(array2);
console.log(array3);
