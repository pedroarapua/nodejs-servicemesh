const axios = require('axios');

const urlGateway = process.env.NODEJS_SERVICEMESH_GATEWAY_URL;
const routes = ('' || process.env.NODEJS_SERVICEMESH_GATEWAY_ROUTES).split(',');

function call(url) {
  axios.get(url)
    .then((response) => {
      const { status, data } = response
      console.log(`status => ${status}, body: ${data}`);
      console.log(`Sucesso Worker, url => ${url}`);
    })
    .catch(error => {
      console.error(`Error Worker, url => ${url}, err => ${error}`);
    });
}

for(let i = 0; i < routes.length; i++) {
  const url = urlGateway + routes[i];
  setInterval(async () => {
    call(url);
  }, 1000)
}