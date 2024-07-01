// Problema: Calcular el Promedio, Mínimo y Máximo de un Array de Números
// Dado un array de números, utiliza el método reduce para calcular el promedio, el valor mínimo y el valor máximo. Devuelve un objeto que contenga estas tres estadísticas.

const numeros = [3, 8, 1, 4, 10];

const estadisticas = numeros.reduce(
  (acumulador, numero, index, array) => {
    acumulador.suma += numero;
    // Promedio
    if (index === array.length - 1)
      acumulador.promedio = parseInt(acumulador.suma / array.length);
    // Minimo
    if (numero < acumulador.minimo) acumulador.minimo = numero;
    // Máximo
    if (numero > acumulador.maximo) acumulador.maximo = numero;
    console.log(index);
    console.log(array);
    return acumulador;
  },
  { suma: 0, promedio: 0, minimo: Infinity, maximo: -Infinity }
);

console.log(estadisticas);
