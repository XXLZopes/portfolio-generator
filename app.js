const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);
// //Three inputs for fs.writeFile() 1st is the file name, 
// //2nd is the data that is being written (HTML string),
// //3rd is the callback function that will handle any errors and success massage.
// fs.writeFile('./index.html', generatePage(name, github), err =>{
//     if (err) throw err;
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });