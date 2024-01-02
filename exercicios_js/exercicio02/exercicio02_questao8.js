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

for (let i = 0; i < products.length; i++) {
  if (products[i].price < 10.5) {
      console.log(`Produto: ${products[i].name}, Preço: R$${products[i].price}`);
  }
}
