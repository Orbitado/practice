// Problema 23: Agrupar Objetos por Propiedad
// Dado un array de objetos, cada uno con propiedades id y grupo, crea un objeto donde las claves sean los nombres de los grupos y los valores sean arrays de objetos pertenecientes a ese grupo.

const datos = [
  { id: 1, grupo: "A" },
  { id: 2, grupo: "B" },
  { id: 3, grupo: "A" },
  { id: 4, grupo: "C" },
  { id: 5, grupo: "B" },
];

const grupos = datos.reduce((acumulador, dato) => {
  const { grupo } = dato;

  if (!acumulador[grupo]) acumulador[grupo] = [];

  acumulador[grupo].push(dato);

  return acumulador;
}, {});

console.log(grupos);
