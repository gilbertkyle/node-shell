const cwd = require('./pwd.js');
const ls = require('./ls');
const cat = require("./cat");

process.stdout.write("prompt> ")

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    const cmd = input.split(' ')[0];
    
    //process.stdout.write('You typed ' + cmd);
    if (cmd === "cwd") {
        process.stdout.write(cwd());
    }
    if (cmd === "ls") {
        ls();
    }
    if (cmd === "cat") {
        let file = input.split(' ')[1];
        cat(file);
    }
    
    process.stdout.write('\nprompt > ');
});