function caixasPorCompartimento(estante, indiceCompartimento) {
  if (!Array.isArray(estante) || indiceCompartimento < 0 || indiceCompartimento >= estante.length) {
      return "Parâmetros inválidos!";
  }

  return estante[indiceCompartimento];
}

const compartimentoSolicitado = 0;
const caixasCompartimento = caixasPorCompartimento(estante, compartimentoSolicitado);
console.log(caixasCompartimento);
