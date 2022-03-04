const request = require('request');

const curl = (url, done) => {
  request(url, function (error, response, body) {
    if (error){
      throw error
    } else {
        done(body)
    }
  });
}

module.exports = curl;
