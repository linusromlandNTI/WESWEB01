var http = require("http");
const url = require('url');

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello Niklas!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(5000); //the server object listens on port 5000