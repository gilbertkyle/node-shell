const cwd = require('./pwd.js');
const ls = require('./ls');
const cat = require("./cat");
const curl = require('./curl');
const date = require('./date');
const echo = require('./echo');
const head = require('./head');
const tail = require('./tail');

process.stdout.write("prompt> ")

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    const cmd = input.split(' ')[0];

    //process.stdout.write('You typed ' + cmd);
    if (cmd === "cwd") {
        cwd(done);
    }
    if (cmd === "ls") {
        ls(done);
    }
    if (cmd === "cat") {
        let file = input.split(' ')[1];
        cat(file, done);
    }

    if (cmd === 'curl'){
        let resultURL = input.split(' ')[1]
        curl(resultURL, done);
    }

    if (cmd === 'date') {
        date(done);
    }

    if (cmd === 'echo') {
        let resultStr = input.split(' ').slice(1).join(' ');
        echo(resultStr, done);
    }

    if (cmd === 'head') {
        let result = input.split(' ')[1];
        head(result, done);
    }

    if (cmd === 'tail') {
        let result = input.split(' ')[1];
        tail(result, done);
    }
});

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}
