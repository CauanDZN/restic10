function filterProductByName(products, productName) {
  if (!Array.isArray(products)) {
      return "O primeiro parâmetro deve ser uma lista!";
  }

  if (typeof productName !== 'string') {
      return "O segundo parâmetro deve ser uma string!";
  }

  const filteredProducts = [];

  for (const product of products) {
      if (product.name.includes(productName)) {
          filteredProducts.push(product);
      }
  }

  return filteredProducts;
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

console.log(filterProductByName(products, 'cho'));
