const user = {
  name: 'Cauan Victor',
  sex: 'masculino',
  age: 18
}

if (typeof user.name !== 'string') {
  console.log("O nome do usuário foi registrado com formato errado. Deve ser string!");
}

if (typeof user.sex !== 'string') {
  console.log("O sexo do usuário foi registrado com formato errado. Deve ser string!");
}

if (typeof user.age !== 'number') {
  console.log("A idade do usuário foi registrada com formato errado. Deve ser number!");
}
