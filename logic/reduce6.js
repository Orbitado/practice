// Ejercicio: Calcular el Monto Total de una Lista de Compras
// Dado un array de objetos que representan artículos en una lista de compras, cada objeto tiene una propiedad precio y una propiedad cantidad. Utiliza reduce para calcular el monto total de la lista de compras.

const listaDeCompras = [
  { nombre: "Manzanas", precio: 0.5, cantidad: 4 },
  { nombre: "Leche", precio: 1.5, cantidad: 2 },
  { nombre: "Pan", precio: 2.0, cantidad: 1 },
  { nombre: "Huevos", precio: 0.2, cantidad: 12 },
];

const result = listaDeCompras.reduce((acumulador, compra) => {
  console.log(compra);
  return acumulador + compra.precio * compra.cantidad;
}, 0);
console.log(result);
