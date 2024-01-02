function caixasDiagonalSecundaria(estante) {
  if (!Array.isArray(estante) || estante.length === 0 || estante.length !== estante[0].length) {
      return "Estante inválida!";
  }

  return estante.map((compartimento, indice) => compartimento[estante.length - 1 - indice]);
}

const caixasDiagonalSec = caixasDiagonalSecundaria(estante);
console.log(caixasDiagonalSec);
