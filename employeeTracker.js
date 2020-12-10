var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all Employees.",
                "View all Employees Department.",
                "View Roles",
                "Add employee",

                "Update Employee Role."
            ]
        })

        .then(function (answer) {
            switch (answer.action) {
                case "View all Employees":
                    viewAllEmployees();
                    break;

                case "Find all Department":
                    viewAllEmployeesByDepartment();
                    break;

                case "View Roles":
                    roles();
                    break
                 
                case "Add employee":
                    addEmployee();
                    break;

                case "Update Employees Role":
                    updateAnEmployeeRole();
                    break;

            }
        });
}
function viewAllEmployees() {
    connection.query("SELECT * FROM employee", 
    function(err, data){
        console.table(data);     
        action();
    })
};
function viewAllDepartment() {
    connection.query("SELECT * FROM department", 
    function (err, data){
        console.table(data); 
        action();
    })
};

function roles(){
    connection.query("SELECT * FROM roles", 
    function(err, data){
        console.table(data);
        action();
    })
};

function addEmployee() { 
    inquirer.prompt([
        {
          name: "firstname",
          type: "input",
          message: "Enter their first name "
        },
        {
          name: "lastname",
          type: "input",
          message: "Enter their last name "
        },    
        {
            name: "choice",
            type: "list",
            message: "Whats their managers name?",
        }
    ]).then(function(answer) {
          
        switch(answer.role){