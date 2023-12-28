function filtrarPositivos(numeros, callback) {
  const numerosPositivos = callback(numeros);
  return numerosPositivos;
}

const funcaoCallback = numeros => numeros.filter(num => num > 0);

const numeros = [-2, 3, 0, 4, 2 - 1, -4, 8];
const numerosPares = filtrarPositivos(numeros, funcaoCallback);
console.log(numerosPares);
