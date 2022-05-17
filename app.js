const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));   //public is the name of the static folder through which we can access the bootstrap and images (which are in our local) anywhere.

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
  console.log(__dirname);
})

app.post("/", function(req, res){

  var firstName = req.body.fName;
  console.log(firstName);
  res.send("Hello " + firstName);
})


app.listen(3000, function(){
  console.log("Server is now running on 3000");
})
