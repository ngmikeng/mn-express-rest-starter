const mongoose = require('mongoose');
const Promise = require('bluebird');
const util = require('util');
const config = require('../config');

if (config.env === 'development') {
  mongoose.set('debug', true);
}

let connectionsByDb = {};

module.exports = {
  createConnection: createConnection,
  useDb: useDb
};

function createConnection(options) {
  return new Promise((resolve, reject) => {
    try {
      // create default connection
      mongoose.connect(config.mongodbUrl, options);
      mongoose.connection.on('error', function(error) {
        reject(error);
      });
      mongoose.connection.on('connected', function() {
        resolve(mongoose.connection);
      });
      mongoose.connection.on('disconnected', function() {
        console.log('MongoDB disconnected');
      });
      mongoose.connection.on('reconnected', function() {
        console.log('MongoDB reconnected!');
      });
      mongoose.connection.on('reconnecting', function() {
        console.log('Reconnecting...!');
      });
    } catch (err) {
      reject(util.inspect(err));
    }
  })
}

function useDb(dbName) {
  if (!connectionsByDb[dbName]) {
    connectionsByDb[dbName] = mongoose.connection.useDb(dbName);
  }

  return connectionsByDb[dbName];
}
