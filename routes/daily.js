const Promise = require('bluebird');
const Daily = require('../services/daily');

module.exports = function(app) {
  app.get('/', async (req, res) => {
    const data = await Promise.resolve(1);
    res.send({ hello: 'world', data: data });
  });

  app.get('/index', async (req, res) => {
    res.render('index', {});
  });

  app.get('/daily/list', async (req, res) => {
    const data = await Daily.findAsync();
    res.send(data);
  });

  app.post('/daily/create', async (req, res) => {
    const params = req.body;
    await Daily.addAsync(params);

    res.send({ result: true });
  });

  app.get('/one', async (req, res) => {
    const daily = {
      account_id: 1,
      text: 'text',
      rich_text: 'rich_text',
      status: 'normal',
      visible: 'public'
    };

    let data = {};
    try {
      data = await Daily.addAsync(daily);
    } catch (e) {
      console.log(e, e.stack);
    }
    res.send({ hello: 'world', data: data });
  });

};
