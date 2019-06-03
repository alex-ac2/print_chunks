var getHTML = require('./http_functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};

function printUpperCase (html) {
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, printUpperCase);

