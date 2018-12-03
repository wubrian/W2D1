// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

//This function should console.log each chunk of data as it is received,
//concatenated with a newline character ('\n') so you can visualize each chunk.
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received:', data, "\n");
    });
  });
}

getAndPrintHTMLChunks();
