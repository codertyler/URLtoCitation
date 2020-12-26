const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const { DOMParser } = require('xmldom');
const fetch = require('node-fetch');





const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.all('/api/URLs', (req, res) => {
  const inputText = req.body;
  
  
   

  // const urlData = () => {
  //   for(const url of inputText) {
  //     console.log(url);
  //     console.log(inputText);
  //     axios
  //     .get(url)
  //     .then((html)=> {
  //       let parser = new DOMParser();
  //       var doc = parser.parseFromString(html.data, 'text/html');
  //       // console.log(JSON.parse(doc.getElementsByTagName("script")["0"].attributes["0"].ownerElement.childNodes["0"].data).author.name)
  //       // console.log(JSON.parse(doc.getElementsByTagName("script")["0"].attributes["0"].ownerElement.childNodes["0"].data).headline)
  //       // console.log(JSON.parse(doc.getElementsByTagName("script")["0"].attributes["0"].ownerElement.childNodes["0"].data).datePublished)
  
  //       return typeof html.data;
  //       // result.push(html.data);
  //       // console.log(doc.getElementsByTagName("script")["0"].attributes["0"].ownerElement.childNodes["0"].data)
  //     })  
  //     .catch(error => {
  //       console.log(error);
  //     })
  //   }
  // }
  

  // res.json(urlData());

  
})

// app.get('/api/URLs', (req, res) => {
//   res.send('working')
// })

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);