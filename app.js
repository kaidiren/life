const express = require('express');
const app = express();

const LEX = require('letsencrypt-express');
const DOMAIN = 'xli.me,www.xli.me,life.xli.me';
const EMAIL = 'kaidiren@gmail.com';

const lex = LEX.create({
  configDir: require('os').homedir() + '/life',
  approveRegistration: function(hostname, approve) {
    approve(null, {
      domains: [DOMAIN],
      email: EMAIL,
      agreeTos: true,
      server: LEX.productionServerUrl
    });
  }
});

app.get('/', function(req, res) {
  res.send('Hello https!');
});


lex.onRequest = app;
lex.listen([80], [443, 5001], function() {
  const protocol = ('requestCert' in this) ? 'https' : 'http';
  console.log("Listening at " + protocol + '://127.0.0.1:' + this.address().port);
});
