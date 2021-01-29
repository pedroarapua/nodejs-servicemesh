const axios = require('axios');

const urlGateway = process.env.NODEJS_SERVICEMESH_GATEWAY;

function call(url) {
  axios.get(url)
    .then(() => {
      console.log(`Sucesso Worker, url => ${url}`);
    })
    .catch(error => {
      console.error(`Error Worker, url => ${url}, err => ${error}`);
    });
}

setInterval(async () => {
  call(urlGateway);
}, 1000)
