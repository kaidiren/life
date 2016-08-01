var Daily = require('./models/daily');

Daily.sync({ force: false }).then();
