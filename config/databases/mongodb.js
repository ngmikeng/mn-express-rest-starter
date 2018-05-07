const mongoose = require('mongoose');
const Promise = require('bluebird');

let mainConnection = {};
let othersConnection = {};

module.exports = {
  createMainConnection: createMainConnection
};

function createMainConnection(options) {
  return new Promise((resolve, reject) => {
    mainConnection = mongoose.createConnection(process.env.MONGODB_URI, options);
    mainConnection.on('error', function(error) {
      reject(error);
    });
    mainConnection.on('connected', function() {
      resolve(mainConnection);
    });
    mainConnection.on('disconnected', function() {
      console.log('MongoDB disconnected');
    });
    mainConnection.on('reconnected', function() {
      console.log('MongoDB reconnected!');
    });
    mainConnection.on('reconnecting', function() {
      console.log('Reconnecting...!');
    });
  })
}
