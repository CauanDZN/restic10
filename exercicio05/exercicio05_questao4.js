function somatorioImparesReduce(numeros) {
  return numeros.reduce((acc, num) => (num % 2 !== 0 ? acc + num : acc), 0);
}

const resultadoReduce = somatorioImparesReduce(numerosImpares);
console.log(resultadoReduce);
