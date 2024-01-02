function soma(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

function operacaoMatematica(operacao, num1, num2) {
  switch (operacao) {
      case 'soma':
          return soma(num1, num2);
      case 'subtracao':
          return subtracao(num1, num2);
      case 'multiplicacao':
          return multiplicacao(num1, num2);
      case 'divisao':
          return divisao(num1, num2);
      default:
          return "Operação inválida. Escolha entre 'soma', 'subtracao', 'multiplicacao' e 'divisao'.";
  }
}

console.log(operacaoMatematica('soma', 1, 2));
