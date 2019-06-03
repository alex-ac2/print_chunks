var https = require('https');

function getHTML (options, callback) {
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
}  


//function printHTML (html) {
//  console.log(html);
//}

var requestOptions_stepFour = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

let stepFourRequest = getHTML(requestOptions_stepFour, function (bufferOutput) {
  console.log(bufferOutput);
});

console.log(stepFourRequest);
