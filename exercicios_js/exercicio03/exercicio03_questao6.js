function fatorial(numero) {
  if (numero === 0 || numero === 1) {
      return 1;
  }

  return numero * fatorial(numero - 1);
}

console.log(fatorial(5));
