const fs = require("fs")

const head = (file, done) => {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error){
      throw error
    } else {
      done(data.split('\n').slice(0,10).join('\n'));
    }
  })
}

module.exports = head;
