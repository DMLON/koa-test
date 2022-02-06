const {loggerWarnings,loggerErrors ,loggerDefault } = require('../utils/loggers');
const {DbClient} = require('./DbClient');
const mongoose = require('mongoose');

class MongoClient extends DbClient {
    constructor(connectionString) {
        super()
        this.connected = false
        this.client = mongoose
        this.connectionString = connectionString
    }

    async connect() {
        try {
            await this.client.connect(this.connectionString)
            loggerDefault.info('base de datos conectada')
            this.connected = true
        } catch (error) {
            throw new Error({status:500, message:'error al conectarse a mongodb '+error})
        }
    }

    async disconnect() {
        try {
            await this.client.connection.close()
            loggerDefault.info('base de datos desconectada')
            this.connected = false
        } catch (error) {
            throw new Error({status:500, message:'error al desconectarse de mongodb '+error})
        }
    }
}

module.exports = MongoClient