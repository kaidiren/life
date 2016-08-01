module.exports = {
  host: '127.0.0.1',
  port: '80',
  dev_mode: true,

  domains: [
    'xli.me',
    'www.xli.me',
    'life.xli.me'
  ],

  sqlite: {
    life: {
      poolSize: 5,
      database: 'life',
      storage: '/Users/rkd/github/life/database/life.sqlite',
    }
  },

  admin: {
    name: 'rkd',
    password: '123456',
  },

  security: {
    cookie: 'cccccc',
    session: 'ssssss'
  },

  enable_https: false
};
