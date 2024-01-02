function sumProductsPrice(products) {
  if (!Array.isArray(products)) {
      return "O parâmetro deve ser uma lista!";
  }

  if (products.length === 0) {
      return 0;
  }

  const total = products.reduce((acc, product) => acc + product.price, 0);
  return total.toFixed(2);
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

console.log(sumProductsPrice(products));
