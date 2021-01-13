const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { DOMParser } = require("xmldom");
const cheerio = require("cheerio");
const request = require("request");
const { url } = require("inspector");
const { raw } = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));


app.post("/api/URLs", (req, res) => {
  //Getting the urls from the front
  const inputObj = req.body.params;

  //Pushing all the citation response data into this array
  const urlResponse = [];

  request(inputObj, (error, response, html) =>{
    const $ = cheerio.load(html);
    const rawObj = JSON.parse($('[type="application/ld+json"]').html());
    if (rawObj) {
      res.send(rawObj);
    } else {
      res.send("URL is not supported!")
    }
      
  })



});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
