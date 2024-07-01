// Ejercicio: Encontrar el Producto con Mayor Ingreso Total
// Dado un array de objetos que representan ventas, cada uno con una propiedad producto, una propiedad precio (precio de venta), y una propiedad cantidad (cantidad vendida), utiliza reduce para encontrar el producto que generó el mayor ingreso total (precio * cantidad). El resultado debe ser un objeto con el nombre del producto y el ingreso total.

const ventas = [
  { producto: "Manzana", precio: 0.5, cantidad: 50 },
  { producto: "Leche", precio: 1.5, cantidad: 30 },
  { producto: "Pan", precio: 2.0, cantidad: 40 },
  { producto: "Huevos", precio: 0.2, cantidad: 100 },
  { producto: "Zanahoria", precio: 0.3, cantidad: 80 },
];

const result = ventas.reduce(
  (acumulador, venta) => {
    if (acumulador.ingresoTotal < venta.precio * venta.cantidad) {
      acumulador.ingresoTotal = venta.precio * venta.cantidad;
      acumulador.producto = venta.producto;
    }
    return acumulador;
  },
  { ingresoTotal: 0 }
);

console.log(result);
