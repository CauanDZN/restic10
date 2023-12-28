function caixasDiagonalPrincipal(estante) {
  if (!Array.isArray(estante) || estante.length === 0 || estante.length !== estante[0].length) {
      return "Estante inválida!";
  }

  return estante.map((compartimento, indice) => compartimento[indice]);
}

const caixasDiagonal = caixasDiagonalPrincipal(estante);
console.log(caixasDiagonal);
