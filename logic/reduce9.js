// Ejercicio: Crear un Historial de Compras
// Dado un array de objetos que representan compras, cada uno con una propiedad producto y una propiedad fecha (en formato YYYY-MM-DD), utiliza reduce para agrupar las compras por año. El resultado debe ser un objeto donde las claves son los años y los valores son arrays de nombres de productos comprados en ese año.

const compras = [
  { producto: "Manzana", fecha: "2023-01-15" },
  { producto: "Leche", fecha: "2022-05-10" },
  { producto: "Pan", fecha: "2023-03-12" },
  { producto: "Huevos", fecha: "2021-08-22" },
  { producto: "Zanahoria", fecha: "2022-11-30" },
];

const result = compras.reduce((acumulador, compra) => {
  compra.fecha = compra.fecha.split("-", 1);
  if (!acumulador[compra.fecha]) {
    acumulador[compra.fecha] = [];
  }
  acumulador[compra.fecha].push(compra.producto);
  return acumulador;
}, {});

console.log(result);
