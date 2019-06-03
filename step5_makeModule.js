var getHTML = require('./http_functions.js');


var requestOptions_stepFour = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

let stepFourRequest = getHTML(requestOptions_stepFour, function (bufferOutput) {
  console.log(bufferOutput);
});

console.log(stepFourRequest);
