function ordenarAlfabeticamente(arg1, arg2, arg3, arg4, arg5) {
  const args = [arg1, arg2, arg3, arg4, arg5];

  for (const arg of args) {
      if (typeof arg !== 'string') {
          return "Erro: Digite apenas strings como argumentos.";
      }

      if (arg.length <= 3) {
          return "Erro: As strings devem ter comprimento maior que 3.";
      }
  }

  return args.sort();
}

console.log(ordenarAlfabeticamente('banana', 'abacaxi', 'laranja', 'uva', 'maçã'));
