const http = require('http');
const port = process.env.PORT || 80;
const delay = process.env.DELAY || 1000

//create a server object:
http.createServer(function (req, res) {
  setTimeout(function() {
    var url = req.url;
    if(url ==='/favicon.ico'){
      return res.end(); //end the response
    } else if(url ==='/error'){
      res.write('<h1>error<h1>'); //write a response
      res.statusCode = 500
      res.end(); //end the response
    } else{
      res.write('<h1>Hello World!<h1>'); //write a response
      res.end(); //end the response
    }
    
    console.info(`microservice, url => ${url}`);
  }, delay)
}).listen(port, undefined, function() { console.log(`Running in http://localhost:${port}`) }); //the server object listens on port 8080