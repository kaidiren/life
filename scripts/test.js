var Daily = require('./models/daily');

Daily.sync().then();

Daily
  .create({
    account_id: 1,
    daily_id: 1,
    content: 'test',
    status: 'normal',
    visible: 'pubilc',
    tags: '[]'
  })
  .then((one) => {
    console.log(one);
  })
  .catch((e) => {
    console.error(e);
  });
