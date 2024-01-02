function findUserById(users, userId) {
  if (!Array.isArray(users)) {
      return "O primeiro parâmetro deve ser uma lista!";
  }

  if (typeof userId !== 'number') {
      return "O segundo parâmetro deve ser um número!";
  }

  for (const user of users) {
      if (user.id === userId) {
          return user;
      }
  }

  return null;
}

const users = [
  {
      id: 1,
      name: 'Carlos Júnior',
      age: 26
  },
  {
      id: 2,
      name: 'Ceverino Cordeiro',
      age: 70
  }
];

console.log(findUserById(users, 2));
