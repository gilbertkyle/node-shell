const fs = require('fs');

const cat = (filePath) => {
    fs.readFile(filePath, (error, data) => {
        if (error) {
            throw error;
        } else {
            process.stdout.write(data);
        }
    });
}

module.exports = cat;