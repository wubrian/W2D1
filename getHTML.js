var https = require('https');

function getHTML (options, callBack) {

  /* Add your code here */
  https.get(options, function(response) {

    response.setEncoding('utf8');

    var allData = "";

    response.on('data', function (data) {
      allData += data;
    });

    response.on('end', function (data) {
      callBack(allData);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);