const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const employees = [];

function showMenu() {
    console.log('\nEmployee Management System');
    console.log('1. Add Employee');
    console.log('2. List Employees');
    console.log('3. Remove Employee');
    console.log('4. Exit');
    rl.question('Enter your choice: ', handleMenu);
}

function handleMenu(choice) {
    switch(choice.trim()) {
        case '1':
            rl.question('Enter employee name: ', (name) => {
                rl.question('Enter employee ID: ', (id) => {
                    employees.push({ name, id });
                    console.log(Employee ${name} (ID: ${id}) added successfully.);
                    showMenu();
                });
            });
            break;
        case '2':
            console.log('\nEmployee List:');
            if (employees.length === 0) {
                console.log('No employees found.');
            } else {
                employees.forEach((emp, idx) => {
                    console.log(${idx + 1}. Name: ${emp.name}, ID: ${emp.id});
                });
            }
            showMenu();
            break;
        case '3':
            rl.question('Enter employee ID to remove: ', (id) => {
                const index = employees.findIndex(emp => emp.id === id);
                if (index !== -1) {
                    console.log(Employee ${employees[index].name} (ID: ${id}) removed successfully.);
                    employees.splice(index, 1);
                } else {
                    console.log(Employee ID ${id} not found.);
                }
                showMenu();
            });
            break;
        case '4':
            rl.close();
            break;
        default:
            console.log('Invalid choice. Try again.');
            showMenu();
    }
}

rl.on('close', () => {
    console.log('Exit');
    process.exit(0);
});

showMenu();
