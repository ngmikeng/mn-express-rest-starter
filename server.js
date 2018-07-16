const config = require('./config/config');
const app = require('./config/app');

// Server is listenning on port {config.port}
app.listen(config.port, () => {
  console.info(`Server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});
