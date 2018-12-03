var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
  https.get(options, function(response) {

    response.setEncoding('utf8');

    var allData = "";

    response.on('data', function (data) {
      allData += data;
    });

    response.on('end', function (data) {
      callback(allData);
    });
  });
};