const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createHTML = require("./src/createHTML");

const team = [];
// blank array because thats where input wi

//validating bc we want to make sure user inputs info
const validateInput = (nameInput) =>
  nameInput ? true : (console.log("You must enter a value to proceed!"), false);

// starting with Q's for manager
const manager = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "name",
    default: "Manager",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is the managers ID number?",
    name: "id",
    default: "001",
    validate: (id) => {
      if (isNaN(id)) {
        console.log("input only numbers for ID");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is the managers email?",
    name: "email",
    default: "default@default.com",
    validate: validateInput,
  },
  {
    type: "input",
    message: "what is the managers phone number?",
    name: "officeNumber",
    default: "123-456-7890",
    validate: validateInput,
  },
];

// function addManager() {
//   inquirer.prompt(manager).then((answers) => {
//     var manager = new Manager(
//       answers.name,
//       answers.id,
//       answers.email,
//       answers.officenumber
//     );
//     team.push(manager);
//     add();
//   });
// }

//move onto Q's for engineer
const engineer = [
  {
    type: "input",
    message: "What is the engineers name?",
    name: "name",
    default: "Engineer",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is the engineers engineer's ID number?",
    name: "id",
    default: "002",
    validate: (id) => {
      if (isNaN(id)) {
        console.log("input only numbers for ID");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "email",
    default: "default@default.com",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is the engineer's Github handle?",
    name: "github",
    default: "github",
    validate: validateInput,
  },
];

//inquirer
function addEngineer() {
  inquirer.prompt(engineer).then((data) => {
    team.push(new Engineer(data.name, data.id, data.email, data.github));
    myTeam();
  });
}

const intern = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
    default: "Intern",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is the intern's ID numer?",
    name: "id",
    default: "003",
    validate: (id) => {
      if (isNaN(id)) {
        console.log("input only numbers for ID");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "email",
    default: "default@default.com",
    validate: validateInput,
  },
  {
    type: "input",
    message: "What is the intern's current school?",
    name: "school",
    default: "University of Richmond",
    validate: validateInput,
  },
];

function addIntern() {
  inquirer.prompt(intern).then((data) => {
    team.push(new Intern(data.name, data.id, data.email, data.school));
    myTeam();
  });
}

// function employee() {
//   inquirer
//     .prompt({
//       type: "list",
//       message: "Add  employee?",
//       name: "employee",
//       choices: ["Engineer", "Intern", "Finished"],
//     })
//     .then((answer) => {
//       switch (answer.employee) {
//         case "Engineer":
//           engineerPrompt();
//           break;
//         case "Intern":
//           internPrompt();
//           break;
//         default:
//           writeToFile("index.html", team);
//       }
//     });
// }

function writeToFile(data) {
  fs.writeFile("./dist/myTeam.html", data, (err) =>
    err ? console.log(err) : console.log("Success! Team has been generated!")
  );
}

function myTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select an option:",
        name: "nextOption",
        choices: ["Add Engineer", "Add Intern", "Team Complete"],
      },
    ])

    .then((input) => {
      if (input.nextOption === "Add Engineer") {
        addEngineer();
      } else if (input.nextOption === "Add Intern") {
        addIntern();
      } else if (input.nextOption === "Team Complete") {
        let html = createHTML(team);
        writeToFile(html);
        console.log(team);
      }
    });
}

function init() {
  inquirer
    .prompt(manager)

    .then((data) => {
      data.role = "Manager";
      team.push(new Manager(data.name, data.id, data.email, data.officeNumber));
      myTeam();
    });
}

init();
