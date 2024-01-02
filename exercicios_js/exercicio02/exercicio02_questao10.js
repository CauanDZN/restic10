const products = [
  {
      name: 'Caixa de Sabão Z',
      price: 30.99
  },
  {
      name: 'Chocolate X',
      price: 10.4
  },
  {
      name: 'Arroz T',
      price: 8.3
  },
  {
      name: 'Salgadinho F',
      price: 10.5
  }
]

products.sort((a, b) => a.price - b.price);

console.log("Lista de produtos ordenada crescentemente pelo preço:");
for (let i = 0; i < products.length; i++) {
  console.log(`Produto: ${products[i].name}, Preço: R$${products[i].price}`);
}
