var https = require('https');

function getAndPrintHTML (options) {
  /* Add your code here */
  https.get(options, function(response) {

    response.setEncoding('utf8');

    var allData = "";

    response.on('data', function (data) {
      allData += data;
    });

    response.on('end', function() {
      console.log(allData);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);