const http = require('http');
const port = process.env.PORT || 80;
const urlMicroservice = process.env.NODEJS_SERVICEMESH_MICROSERVICE;

//create a server object:
http.createServer(function (req, res) {
  const url = req.url;
  if(url ==='/favicon.ico'){
    return res.end(); //end the response
  }

  const urlGet = `${urlMicroservice}${url}`;

  http.get(urlGet, (resp) => {
    let data = '';
    
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.write(data); //write a response
      res.end(); //end the response
    });

    console.info(`gateway, url => ${url}`);
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}).listen(port, undefined, function() { console.log(`Running in http://localhost:${port}`) }); //the server object listens on port 8080