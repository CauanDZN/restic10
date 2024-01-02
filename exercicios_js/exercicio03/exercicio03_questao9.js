const usuarios = [];

function salvarUsuario(nome, matricula) {
    usuarios.push({ nome, matricula });
}

function listarUsuarios() {
    return usuarios;
}

salvarUsuario('Alice', '2023001');
salvarUsuario('Bob', '2023002');

console.log(listarUsuarios());
