function innerJoin(lista1, lista2) {
  if (!Array.isArray(lista1)) {
      return "O primeiro parâmetro deve ser uma lista!";
  }
  if (!Array.isArray(lista2)) {
      return "O segundo parâmetro deve ser uma lista!";
  }

  return lista1.filter(item => lista2.includes(item));
}

const numbers1 = [1, 2, 3, 3, 2, 4, 0];
const numbers2 = [1, 2, 3, 5, 10];
console.log(innerJoin(numbers1, numbers2));
