// Problema 12: Sumar los Valores de Propiedades de Objetos
// Dado un array de objetos, cada uno con una propiedad numérica valor, usa un método de array para calcular la suma de todos los valores.

const objetos = [{ valor: 10 }, { valor: 20 }, { valor: 30 }, { valor: 40 }];

const result = objetos.reduce(
  (acumulador, objeto) => acumulador + objeto.valor,
  0
);

// Itera cada elemento del arreglo y lo reduce sólo a uno, acumulándolos en una variable acumuladora.

console.log(result);
