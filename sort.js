const fs = require('fs');

const sort = (filePath, done) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error){
            throw error;
        } else {
            done(data.split('\n').sort().join('\n'));
        }
    })
}

module.exports = sort;