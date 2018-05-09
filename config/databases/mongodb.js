const mongoose = require('mongoose');
const Promise = require('bluebird');
const util = require('util');
const config = require('../config');

if (config.env === 'development') {
  mongoose.set('debug', true);
}

let newConnection = null;

module.exports = {
  createConnection: createConnection,
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
        newConnection = mongoose.connection.useDb('test-new-connection');
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
