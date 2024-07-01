// Ejercicio: Agrupar Productos por Categoría
// Dado un array de objetos que representan productos, cada uno con una propiedad nombre y una propiedad categoría, utiliza reduce para agrupar los productos por categoría. El resultado debe ser un objeto donde las claves son las categorías y los valores son arrays de nombres de productos en esa categoría.

const productos = [
  { nombre: "Manzana", categoria: "Frutas" },
  { nombre: "Lechuga", categoria: "Verduras" },
  { nombre: "Banana", categoria: "Frutas" },
  { nombre: "Zanahoria", categoria: "Verduras" },
  { nombre: "Pera", categoria: "Frutas" },
];

const result = productos.reduce((acumulador, producto) => {
  if (!acumulador[producto.categoria]) {
    acumulador[producto.categoria] = [];
  }

  acumulador[producto.categoria].push(producto.nombre);
  return acumulador;
}, {});
console.log(result);
