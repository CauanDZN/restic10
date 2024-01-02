function somatorioImparesHOF(numeros) {
  return numeros.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
}

const numerosImpares = [0, 2, 1, 5, 7, 0, 2, 21, 1, 3];
const resultadoHOF = somatorioImparesHOF(numerosImpares);
console.log(resultadoHOF);
