// utils.js

const readline = require('readline-sync');

function showMenu() {
    console.log('1 - List people');
    console.log('2 - Add one people');
    console.log('3 - Remove one people');
    console.log('4 - Edit one people');
    console.log('5 - Find one people');
    console.log('6 - Exit');
}

function listPeople(people) {
    console.log('People List:');
    people.forEach(person => {
        console.log(`Name: ${person.name}, Email: ${person.email}, Phone: ${person.phone}`);
    });
}

function addPerson(people) {
    const name = readline.question('Enter the name: ');
    const email = readline.question('Enter the email: ');
    const phone = readline.question('Enter the phone: ');

    const newPerson = { name, email, phone };
    people.push(newPerson);
    console.log('Person added successfully!');
}

function removePerson(people) {
    const email = readline.question('Enter the email of the person to remove: ');
    const index = findPersonIndexByEmail(people, email);

    if (index !== -1) {
        people.splice(index, 1);
        console.log('Person removed successfully!');
    } else {
        console.log('Person not found!');
    }
}

function editPerson(people) {
    const email = readline.question('Enter the email of the person to edit: ');
    const index = findPersonIndexByEmail(people, email);

    if (index !== -1) {
        const newName = readline.question('Enter the new name: ');
        const newPhone = readline.question('Enter the new phone: ');

        people[index].name = newName;
        people[index].phone = newPhone;

        console.log('Person edited successfully!');
    } else {
        console.log('Person not found!');
    }
}

function findPerson(people) {
    const email = readline.question('Enter the email of the person to find: ');
    const index = findPersonIndexByEmail(people, email);

    if (index !== -1) {
        console.log(`Name: ${people[index].name}, Email: ${people[index].email}, Phone: ${people[index].phone}`);
    } else {
        console.log('Person not found!');
    }
}

function findPersonIndexByEmail(people, email) {
    return people.findIndex(person => person.email === email);
}

module.exports = { showMenu, listPeople, addPerson, removePerson, editPerson, findPerson };
