function mapeaCompra(compra, produtos) {
  const produtoEncontrado = produtos.find(prod => prod.id === compra.produto_id);

  if (produtoEncontrado) {
      return {
          id: compra.id,
          produto: produtoEncontrado,
          qtd: compra.qtd
      };
  }

  return null;
}

const produtos = [
  { id: 1, nome: "Traquinas", peso: "500g" },
  { id: 2, nome: "Negresco", peso: "300g" },
  { id: 3, nome: "Floresta Negra", peso: "370g" }
];

const compras = [
  { id: 1, produto_id: 1, qtd: 3 },
  { id: 2, produto_id: 2, qtd: 4 }
];

const comprasMapeadas = compras.map(compra => mapeaCompra(compra, produtos));
console.log(comprasMapeadas);
