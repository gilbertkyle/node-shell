const fs = require('fs');

const ls = (done) => {
    fs.readdir("./", "utf8", (error, files) => {
        if (error){
          throw error
        } else {
            done(files.join('\n'));
        }
    })
}

module.exports = ls;
