const fs = require('fs')

const tail = (file, done) => {
  fs.readFile(file, 'utf8', (error, data) => {
    if(error){
      throw error;
    } else {
      done(data.split('\n').slice(-10).join('\n'));
    }
  })
}

module.exports = tail;
