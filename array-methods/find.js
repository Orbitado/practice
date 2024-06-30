// Problema 4: Encontrar el Primer Número Mayor a 10
// Dado un array de números, usa un método de array para encontrar el primer número que sea mayor a 10.

const numeros = [3, 7, 12, 5, 20, 8];

const result = numeros.find((numero) => numero > 10);

console.log(result);

// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. Se lee de la siguiente manera: "Encuentráme el primer número mayor que 10"
