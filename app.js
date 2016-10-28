const _ = require('lodash');
const config = require('config');
const express = require('express');
const swig = require('swig');
const app = express();

app.use('/node_modules', express.static('node_modules'));

const LEX = require('letsencrypt-express');
const EMAIL = 'kaidiren@gmail.com';
const domains = ['xli.me', 'www.xli.me', 'life.xli.me'];

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

const routes = require('./routes');

routes(app);

const lex = LEX.create({
  configDir: require('os').homedir() + '/life',
  approveRegistration: function(hostname, approve) {
    if (_.includes(domains, hostname)) {
      approve(null, {
        domains: [hostname],
        email: EMAIL,
        agreeTos: true,
        server: LEX.productionServerUrl
      });
    }
  }
});

if (!config.enable_https) {
  app.listen(8000);
  console.log('Listening at: http://127.0.0.1:8000/');
} else {
  lex.onRequest = app;
  lex.listen([80], [443, 5001], function() {
    const protocol = ('requestCert' in this) ? 'https' : 'http';
    console.log('Listening at ' + protocol + '://127.0.0.1:' + this.address().port);
  });
}
