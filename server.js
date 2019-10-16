// Require/import the express module
var express = require("express");
var axios = require('axios');
// Use the Express package to create our server.
var app = express();
var fs = require('fs');
var xml2js = require('xml2js');

// Define a port to listen for incoming requests
var PORT = 8080;

// Create a generic function to handle requests and responses
app.get("*", function(req, res) {
  res.send("It Works!! Path Hit: " + req.url);
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

axios.get('http://webservices.theshootingwarehouse.com/smart/inventory.asmx/DailyItemUpdate?CustomerNumber=99994&UserName=99994&Password=99998&LastUpdate=1/1/1990&LastItem=-1&Source=')
          .then(xmlData => {
              //shows XML
              console.log("XML", xmlData)
              xmlData = xmlData.data;
              var parser = new xml2js.Parser(/* options */);
      parser.parseStringPromise(xmlData).then(result => {
       //second parse to turn XML tables into JSON
              var slightParse = result.string._ 
              var parser = new xml2js.Parser(/* options */);
             parser.parseStringPromise(slightParse).then(result => {
              var json = JSON.stringify(result)
              fs.writeFile('SportsSouthFullAPI.json', json, (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;
            
                // success case, the file was saved
                console.log('json Saved!');
            });
              // console.log("specific name", this.state.posts[0]["0"]);
              })
      })
      }
    )
