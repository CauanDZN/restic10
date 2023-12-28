const fs = require('fs').promises;

async function lerDados() {
    try {
        const usersString = await fs.readFile('./utils-exe-06/users.csv', 'utf-8');
        const addressString = await fs.readFile('./utils-exe-06/address.csv', 'utf-8');

        const users = usersString.split('\n').map(line => line.split(','));
        const addresses = addressString.split('\n').map(line => line.split(','));

        for (let i = 0; i < users.length; i++) {
            const [userId, userName] = users[i];
            const [addressId, addressInfo] = addresses[i];

            console.log(`Usuário: ${userName}`);
            console.log(`Endereço: ${addressInfo}\n`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

lerDados();
