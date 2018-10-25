const config = require('./config/config');
const app = require('./config/app');
const winstonLogger = require('./config/winston');

// Server is listening on port {config.port}
app.listen(config.port, () => {
  winstonLogger.info(`Server started on port ${config.port} (${config.env})`);
});
