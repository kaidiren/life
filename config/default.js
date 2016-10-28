module.exports = {
  host: '127.0.0.1',
  port: '80',
  env: 'development',

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
    name: 'life',
    password: '123456',
  },

  enable_https: false
};
