function somatorio(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

const soma = somatorio(2, 3, 5, 1);
console.log(soma);
