var https = require('https');

let bufferOutput = "";
function getHTML (options, callback) {
  

  // HTTP Request
  https.get(options, function (response) {
    
    // Encode response
    response.setEncoding('utf8');
    
    // Function invoked when data is received
    response.on('data', function (data) {
      bufferOutput += data;
    });

    response.on('end', callback );

  });
}


//function printHTML (html) {
//  console.log(html);
//}

var requestOptions_stepFour = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

let stepFourRequest = getHTML(requestOptions_stepFour, function () {
  console.log(bufferOutput);
});

console.log(stepFourRequest);
