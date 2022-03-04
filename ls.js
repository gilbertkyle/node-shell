const fs = require('fs');

const ls = () => {
    fs.readdir("./", "utf8", (error, files) => {
        if (error){
          throw error  
        } else {
            process.stdout.write(files.join('\n'));
        }
    })
}

module.exports = ls;