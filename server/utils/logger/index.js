const config = require('config');

const loggerOptions = config.get('server.logging');

const levels = {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error'
};

const types = {
    API: 'api',
    EXTERNAL: 'external',
    APP: 'app'
};

const log = (level, message, type, meta) => {
    loggerOptions.loggers.forEach(async (logger) => {
        await logger.log(level, message, type, meta);
    })
};

module.exports = {
    log,
    debug: (message, type, meta) => log(levels.DEBUG, message, type, meta),
    info: (message, type, meta) => log(levels.INFO, message, type, meta),
    warn: (message, type, meta) => log(levels.WARN, message, type, meta),
    error: (message, type, meta) => log(levels.ERROR, message, type, meta),
    levels,
    types
};
