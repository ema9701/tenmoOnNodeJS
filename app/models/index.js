const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const fs = require('fs');
const path = require('path');


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model')(sequelize, Sequelize);
db.account = require('../models/account.model')(sequelize, Sequelize);
db.transfer = require('../models/transfer.model')(sequelize, Sequelize);

const models = {
    User: db.user,
    Account: db.account,
    Transfer: db.transfer
}

Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
})

module.exports = models;
module.exports = db;
