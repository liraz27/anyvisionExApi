const config = require('config');
const dbConfig = config.get(('server.interviewzDb'));
const MongoClient = require('mongodb').MongoClient;
const mongoUrlDb = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.server}/${dbConfig.database}`;

let _db;

const connect = (url) => {
    return MongoClient.connect(url, {useNewUrlParser: true}).then(client => client.db())
};

const connectMongoDB = async () => {
    try {
        const database = await connect(mongoUrlDb);
        _db = database;
    } catch (e) {
        throw (e);
    }
};

const getDB = () => _db;

module.exports = {connectMongoDB, getDB};
