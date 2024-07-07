// Ejercicio: Filtrar Números Primos
// Dado un array de números, crea una función que filtre y devuelva solo los números que son primos.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const esPrimo = (numero) => {
  if (numero <= 1) return false;
  if (numero === 2) return true;
  if (numero % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
};

const result = numeros.filter((numero) => esPrimo(numero));
console.log(result);
