const fs = require('fs');

const cat = (filePath, done) => {
    fs.readFile(filePath, (error, data) => {
        if (error) {
            throw error;
        } else {
            done(data);
        }
    });
}

module.exports = cat;
