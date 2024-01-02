function caixasPorColuna(estante, indiceColuna) {
  if (!Array.isArray(estante) || indiceColuna < 0 || indiceColuna >= estante[0].length) {
      return "Parâmetros inválidos!";
  }

  return estante.map(compartimento => compartimento[indiceColuna]);
}

const colunaSolicitada = 1;
const caixasColuna = caixasPorColuna(estante, colunaSolicitada);
console.log(caixasColuna);
