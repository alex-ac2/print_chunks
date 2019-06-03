var https = require('https');

function getAndPrintHTML (options) {


  let bufferOutput = "";

  // HTTP Request
  https.get(options, function (response) {
    
    // Encode response
    response.setEncoding('utf8');
    
    // Function invoked when data is received
    response.on('data', function (data) {
      //console.log('Chunk Received. Length:', data.length);
      bufferOutput += data;
    });

    response.on('end', function() {
      console.log(bufferOutput);
      console.log('Response stream complete.');
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

let stepThreeRequest = getAndPrintHTML(requestOptions);

console.log(stepThreeRequest);
