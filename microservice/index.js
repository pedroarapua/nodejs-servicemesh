const http = require('http');
const port = process.env.PORT || 80;

//create a server object:
http.createServer(function (req, res) {
  var url = req.url;
  if(url ==='/about'){
    res.write('<h1>about us page<h1>'); //write a response
    res.end(); //end the response
  }else if(url ==='/contact'){
    res.write('<h1>contact us page<h1>'); //write a response
    res.end(); //end the response
  }else{
    res.write('<h1>Hello World!<h1>'); //write a response
    res.end(); //end the response
  }
  
  console.info(`Sucesso microservice, url => ${url}`);
}).listen(port); //the server object listens on port 8080