var https = require('https');

module.exports = function getHTML (options, callback) {

  let bufferOutput = "";
  
  // HTTP Request
  https.get(options, function (response) {
    
    // Encode response
    response.setEncoding('utf8');
    
    // Function invoked when data is received
    response.on('data', function (data) {
      bufferOutput += data;
    });

    response.on('end', function () {
      let returnOutput = callback(bufferOutput);
      return returnOutput;
    });

  });

};

