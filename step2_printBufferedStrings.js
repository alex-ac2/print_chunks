var https = require('https');

function getAndPrintHTML () {

  let bufferOutput = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    
    // Encode response
    response.setEncoding('utf8');
    
    // Function invoked when data is received
    response.on('data', function (data) {
      //console.log('Chunk Received. Length:', data.length);
      bufferOutput += data;
      console.log(data);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });
  
}

getAndPrintHTML();
