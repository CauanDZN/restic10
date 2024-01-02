const user = {
  name: 'Cauan Victor',
  sex: 'masculino',
  age: 18
}

if (!user.name || !user.sex || !user.age) {
  console.log("O usuário não possui todos os dados registrados!");
} else {
  console.log(`O usuário ${user.name} do sexo ${user.sex} tem ${user.age} ano(s)`);
}
