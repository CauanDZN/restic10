import { promises as fs } from 'fs';
import inquirer from 'inquirer';
import utils from './utils.mjs';

async function main() {
    let people = [];

    try {
        const data = await fs.readFile('./peopleData.json', 'utf-8');
        people = JSON.parse(data);
    } catch (error) {
        console.log('No existing data file. Starting with an empty list.');
    }

    while (true) {
        const choice = await showMenuAndGetChoice();

        switch (choice) {
            case 'List people':
                utils.listPeople(people);
                break;
            case 'Add one people':
                utils.addPerson(people);
                break;
            case 'Remove one people':
                utils.removePerson(people);
                break;
            case 'Edit one people':
                utils.editPerson(people);
                break;
            case 'Find one people':
                utils.findPerson(people);
                break;
            case 'Exit':
                await fs.writeFile('./peopleData.json', JSON.stringify(people, null, 2));
                console.log('Exiting. Data saved.');
                return;
            default:
                console.log('Invalid choice. Please try again.');
        }
    }
}

async function showMenuAndGetChoice() {
    const choices = ['List people', 'Add one people', 'Remove one people', 'Edit one people', 'Find one people', 'Exit'];

    const { index } = await inquirer.prompt([
        {
            type: 'rawlist',
            name: 'index',
            message: 'Select an option:',
            choices: choices.map((choice, index) => ({ name: choice, value: index })),
        },
    ]);

    return choices[index];
}

main();
