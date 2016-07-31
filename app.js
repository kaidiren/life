const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

const LEX = require('letsencrypt-express').testing();

const DOMAIN = 'www.xli.me';
const EMAIL = 'kaidiren@gmail.com';

const lex = LEX.create({
  configDir: require('os').homedir() + '/github/life',
  approveRegistration: function(hostname, approve) {
    if (hostname === DOMAIN) {
      approve(null, {
        domains: [DOMAIN],
        email: EMAIL,
        agreeTos: true
      });
    }
  }
});


lex.onRequest = app;

lex.listen([80], [443, 5001], function() {
  const protocol = ('requestCert' in this) ? 'https' : 'http';
  console.log("Listening at " + protocol + '://127.0.0.1:' + this.address().port);
});
