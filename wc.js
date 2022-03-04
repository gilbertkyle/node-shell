const fs = require('fs');

const wc = (file, done) => {
    fs.readFile(file, 'utf8', (error, data) => {
        if (error) {
            throw error
        } else {
            let newLines = data.match(/\n/g).length.toString();
            let numWords = data.split(' ').length.toString();
            let bytes = fs.statSync(file).size.toString();
            let output = `${newLines} ${numWords} ${bytes}` 
            done(output);
        }
    })
}

module.exports = wc;