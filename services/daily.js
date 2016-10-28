const Promise = require('bluebird');
const Daily = require('./models/daily');

exports.findAsync = async () => {
  let records = await Daily.findAll();

  records = records.map((record) => {
    return record.get({
      plain: true
    });
  });

  return records;
};

exports.addAsync = async (params) => {
  return await Daily.create(params);
};

exports.removeAsync = async (id) => {
  return await Daily.destory({where: {id}});
};

exports.updateAsync = async (params) => {
  const records = await Daily.find({where: {id: params.id}});

  await Promise.map(records, async (record) => {
    return await record.update(params);
  });
};

