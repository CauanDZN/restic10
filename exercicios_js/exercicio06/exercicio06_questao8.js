const fs = require('fs').promises;

async function lerArquivo() {
    try {
        const usersString = await fs.readFile('./utils-exe-06/users.csv', 'utf-8');
        console.log(usersString);
    } catch (error) {
        console.error(error.message);
    }
}

lerArquivo();
