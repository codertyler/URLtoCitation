const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { DOMParser } = require("xmldom");
const cheerio = require("cheerio");
const request = require("request");
const { url } = require("inspector");
const { getInitials } = require("./helpers/getInitials");
const { getLastName } = require("./helpers/getLastName");
const { getPubDate } = require("./helpers/getPubDate");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// An api endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

app.post("/api/URLs", (req, res) => {
  //Getting the urls from the front
  const inputObj = req.body.params;

  //Pushing all the citation response data into this array
  const urlResponse = [];

  //This is the citation constructor from the raw response
  function Citation(lastName, initial, publicationDate, title, publisher, url) {
    this.lastName = lastName;
    this.initial = initial;
    this.publicationDate = publicationDate;
    this.title = title;
    this.publisher = publisher;
    this.url = url;
  }

  request(inputObj, (error, response, html) =>{
    const $ = cheerio.load(html);
    const rawObj = JSON.parse($('[type="application/ld+json"]').html());
    res.send(rawObj);
  })


//   for (let i = 0; i < inputObj.length; i++) {
//     request(inputObj[i], (error, response, html) => {
      

//        if (!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);
//         const rawObj = JSON.parse($('[type="application/ld+json"]').html());
//         urlResponse.push(
//           new Citation(
//             getLastName(rawObj.author),
//             getInitials(rawObj.author),
//             getPubDate(rawObj.datePublished),
//             rawObj.headline,
//             rawObj.publisher.name,
//             rawObj.mainEntityOfPage
//           ) 
//         );
        
//         console.log(urlResponse);
//         res.send(urlResponse);

//       }
//     });
//   }
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
