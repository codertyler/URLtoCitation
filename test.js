var DOMParser = require('xmldom').DOMParser;
var doc = new DOMParser().parseFromString(
    '<script id="hello">Hello<script>'
    ,'text/html');


// for (let items in doc) {
//   console.log(items);
// }

console.log(doc.getElementsByTagName("script")["0"].attributes["0"].nodeValue)

