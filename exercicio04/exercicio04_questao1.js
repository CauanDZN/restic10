function showProductsInfo(products) {
  if (!Array.isArray(products)) {
      return "O parâmetro deve ser uma lista!";
  }

  if (products.length === 0) {
      return "A lista não possui produtos!";
  }

  for (const product of products) {
      console.log(`
        Id do produto: ${product.id}
        Nome do produto: ${product.name}
        Preço do produto: R$ ${product.price.toFixed(2)}
      `);
  }
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

showProductsInfo(products);
