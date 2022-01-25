const MongoClient = require('mongodb').MongoClient;
const connections = {};

/**
 * create db connection
 * @method
 * @param {String} dbName
 * @returns {Object} db instance 
 */
exports.getDbConnection = async function(dbName) {
    if(connections[dbName]) {
        return connections[dbName];
    } else {
        try {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            };
            let client = await MongoClient.connect(process.env.MONGO_URL, options);
            connections[dbName] = client.db(dbName);
            return connections[dbName];
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

/**
 * get collection meta data if collection exists
 * @method
 * @param {String} collectionName
 * @param {Object} db db instance
 * @returns {Object}
 */
exports.getCollection = async function(db, collectionName) {
    return await db.listCollections({name: collectionName}).next();
}