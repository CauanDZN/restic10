const fs = require('fs').promises;
const utils = require('./utils');
const readline = require('readline-sync');

async function main() {
    let people = [];

    try {
        const data = await fs.readFile('./peopleData.json', 'utf-8');
        people = JSON.parse(data);
    } catch (error) {
        console.log('No existing data file. Starting with an empty list.');
    }

    while (true) {
        utils.showMenu();

        const choice = parseInt(readline.question('Enter your choice: '));

        switch (choice) {
            case 1:
                utils.listPeople(people);
                break;
            case 2:
                utils.addPerson(people);
                break;
            case 3:
                utils.removePerson(people);
                break;
            case 4:
                utils.editPerson(people);
                break;
            case 5:
                utils.findPerson(people);
                break;
            case 6:
                await fs.writeFile('./peopleData.json', JSON.stringify(people, null, 2));
                console.log('Exiting. Data saved.');
                return;
            default:
                console.log('Invalid choice. Please try again.');
        }
    }
}

main();