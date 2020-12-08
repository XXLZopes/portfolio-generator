
const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;
//Three inputs for fs.writeFile() 1st is the file name, 
//2nd is the data that is being written (HTML string),
//3rd is the callback function that will handle any errors and success massage.
fs.writeFile('./index.html', generatePage(name, github), err =>{
    if (err) throw err;
    console.log('Portfolio complete! Check out index.html to see the output!');
});
