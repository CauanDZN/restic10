const operacoes = require('./operacoes-common.js');

function calcularOperacaoMatematica(operacao, num1, num2) {
  switch (operacao) {
    case 'soma':
      return operacoes.soma(num1, num2);
    case 'subtracao':
      return operacoes.subtracao(num1, num2);
    case 'multiplicacao':
      return operacoes.multiplicacao(num1, num2);
    case 'divisao':
      return operacoes.divisao(num1, num2);
    default:
      return "Operação inválida. Escolha entre 'soma', 'subtracao', 'multiplicacao' e 'divisao'.";
  }
}

console.log(calcularOperacaoMatematica('soma', 1, 2));
