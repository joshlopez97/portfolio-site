const requestIp = require('request-ip');
const fetch = require("node-fetch");

module.exports = function(app) {
  app.use(requestIp.mw());

  app.use(function(req, res, next) {
    const ip = req.clientIp;
    console.log(ip);
    visited(ip);
    next();
  });

  const visited = (ip) => {
    fetch("http://127.0.0.1:4845/email", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ "ip_address": ip})
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
  };
};

