function mapProductsRemoveId(products) {
  if (!Array.isArray(products)) {
      return "O parâmetro deve ser uma lista!";
  }

  const productsWithoutId = products.map(product => {
      const { id, ...productWithoutId } = product;
      return productWithoutId;
  });

  return productsWithoutId;
}

const products = [
  {
      id: 1,
      name: 'Jogo de Panelas',
      price: 54.59
  },
  {
      id: 2,
      name: 'Chocolate L',
      price: 14.99
  },
  {
      id: 3,
      name: 'Sabão Lili',
      price: 29.99
  }
];

console.log(mapProductsRemoveId(products));
