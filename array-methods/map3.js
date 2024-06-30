// Problema 11: Encontrar la Longitud de Cada Palabra
// Dado un array de palabras, usa un método de array para crear un nuevo array que contenga la longitud de cada palabra.

const palabras = ["manzana", "banana", "cereza", "fresa"];

const result = palabras.map((palabra) => palabra.length);

// El length puede dar la longitud de cualquier tipo de dato
console.log(result);
