function selecionaInadimplentes(usuarios) {
  return usuarios
      .filter(usuario => usuario.pagamento === "pendente")
      .map(usuario => usuario.nome);
}

const usuarios = [
  { id: 1, nome: "Fulano de Tal", pagamento: "pendente" },
  { id: 2, nome: "Ronaldo Nazário", pagamento: "pago" },
  { id: 3, nome: "Michael Jordan", pagamento: "pago" },
  { id: 4, nome: "Maria Rios", pagamento: "pago" },
  { id: 5, nome: "Julia Sousa", pagamento: "pago" },
  { id: 6, nome: "José Neymar", pagamento: "pendente" },
  { id: 7, nome: "Mariana Riacho", pagamento: "pago" },
  { id: 8, nome: "Fabiana Beatriz", pagamento: "pendente" }
];

const inadimplentes = selecionaInadimplentes(usuarios);
console.log(inadimplentes);
