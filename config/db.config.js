const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require('../logger/api.logger');
const dotenv = require('dotenv');
dotenv.config();
const connect = () => {

    const hostName = process.env.HOST;
    const userName = process.env.USER;
    const password = process.env.PASSWORD;
    const database = process.env.DB;
    const dialect = process.env.DIALECT;

    const sequelize = new Sequelize("Cherry", "postgres", "qwerty123", {
        host: "localhost",
        dialect: dialect,
        operatorsAliases: false,
        define: {
            timestamps: false
        },
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.Students = require("../model/student.model")(sequelize, DataTypes, Model);
    db.Schedule = require("../model/schedule.model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = connect;


