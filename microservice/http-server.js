const http = require('http');
const port = process.env.PORT || 80;
const host = process.env.HOSTNAME || 'localhost';
const notes = require('./notes')

//create a server object:
http.createServer(function (req, res) {
  res.setHeader('content-type', 'text/html')
  var url = req.url;
  if(url ==='/favicon.ico'){
    return res.end(); //end the response
  } else if(url ==='/timeout') {
    setTimeout(function() {
      res.write(`<h1>Timeout</h1><h2>http://${host}:${port}${url}</h2>`) //write a response
      res.end(); //end the response
    }, 1000);
  } else if(url ==='/error' || url === '/errorretry') {
    res.statusCode = 500
    res.write(`<h1>Internal Server Error</h1><h2>http://${host}:${port}${url}</h2>`) //write a response
    res.end()
  } else if(url ==='/about') {
    res.write(`<h1>About</h1><h2>http://${host}:${port}${url}</h2>`) //write a response
    res.end(); //end the response
  } else if(url ==='/notes') {
    res.write(JSON.stringify(notes)) //write a response
    res.end(); //end the response
  } else {
    res.write(`<h1>Hello World!</h1><h2>http://${host}:${port}${url}</h2>`) //write a response
    res.end(); //end the response
  }
  
  console.info(`microservice, url => http://${host}:${port}${url}`);
}).listen(port, undefined, function() { console.log(`Running in http://${host}:${port}`) }); //the server object listens on port 8080
