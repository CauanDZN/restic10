function operacaoMatematica(operacao, num1, num2) {
  switch (operacao) {
      case 'soma':
          return num1 + num2;
      case 'subtracao':
          return num1 - num2;
      case 'multiplicacao':
          return num1 * num2;
      case 'divisao':
          return num1 / num2;
      default:
          return "Operação inválida. Escolha entre 'soma', 'subtracao', 'multiplicacao' e 'divisao'.";
  }
}

console.log(operacaoMatematica('soma', 1, 2));
