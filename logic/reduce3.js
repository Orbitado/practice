// Problema: Calcular la Suma y el Producto de un Array de Números
// Dado un array de números, utiliza el método reduce para calcular tanto la suma como el producto de todos los elementos. Devuelve un objeto que contenga ambas cantidades.

const numeros = [1, 2, 3, 4, 5];

const result = numeros.reduce(
  (acumulador, numero) => {
    return {
      suma: acumulador.suma + numero,
      producto: acumulador.producto * numero,
    };
  },
  { suma: 0, producto: 1 }
);

console.log(result);

// const op = numeros.reduce((acumulador, numero) => {
//     return acumulador + numero;
//   }, 0);

//   const op2 = numeros.reduce((acumulador, numero) => {
//     return acumulador * numero;
//   }, 1);

//   const result = {
//     suma: op,
//     producto: op2,
//   };
