function calcularMultiplicacaoEResto(numeros) {
  if (!Array.isArray(numeros) || numeros.length < 2) {
      return "Por favor, forneça um array com pelo menos dois números.";
  }

  const multiplicacao = numeros[0] * numeros[numeros.length - 1];
  const resto = numeros[0] % numeros[numeros.length - 1];

  return {
      multiplicacao,
      resto
  };
}

const numerosExemplo = [1, 2, 4, 5, 3, 2, 7, 9, 0, 2];
console.log(calcularMultiplicacaoEResto(numerosExemplo));
