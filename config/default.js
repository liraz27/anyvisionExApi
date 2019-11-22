const winston = require('winston');

module.exports = {
    server: {
        port: 5000,
        interviewzDb: {
            server: 'ds227459.mlab.com:27459',
            database: 'interview',
            user: 'Liraz2701',
            password: 'liraz270197'
        },
        logging: {
            loggers: [
                new winston.Logger({
                    level: 'debug',
                    transports: [
                        new winston.transports.Console()
                    ]
                })
            ]
        }
    },

};