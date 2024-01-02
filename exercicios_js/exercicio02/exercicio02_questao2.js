const user = {
  name: 'Cauan Victor',
  sex: 'masculino',
  age: 18
}

if (!user.name) {
  console.log("O usuário não tem nome registrado!");
}

if (!user.sex) {
  console.log("O usuário não tem sexo registrado!");
}

if (!user.age) {
  console.log("O usuário não tem idade registrada!");
}

if (user.name && user.sex && user.age) {
  console.log(`O usuário ${user.name} do sexo ${user.sex} tem ${user.age} ano(s)`);
}
