const config = require('config');
const server = require('./server');
const logger = require('./utils/logger');
const serverConfig = config.get('server');
const initializeDatabase = require('./utils/mongodb');

initializeDatabase.connectMongoDB().then(() => {
    server.listen(serverConfig.port, () => {
        logger.debug(`Server started with these params: \r\n port: ${serverConfig.port} node-env: ${process.env.NODE_ENV}`,
            logger.types.API);
    });
});

