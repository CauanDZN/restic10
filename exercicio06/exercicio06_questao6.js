function uniqueValues(lista) {
  if (!Array.isArray(lista)) {
      return "O parâmetro deve ser uma lista!";
  }

  return Array.from(new Set(lista));
}

const numbers = [1, 2, 3, 3, 2, 4, 0];
console.log(uniqueValues(numbers));
