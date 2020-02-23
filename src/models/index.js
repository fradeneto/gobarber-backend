"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV === 'test' ? 'test' : 'db';
//const config = require("../../config/database")[env];
const db = {};

let config;
if (env === 'teste'){
  config = {
    url: 'sqlite::memory:',
    storage: "./__tests__/database.sqlite",
    dialect: process.env.DB_DBMS,
    
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
} else {
  config = {
    url: process.env.DATABASE_URL,
    dialectOptions: {
      useUTC: false
    },
    timezone: "-03:00",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    }
  }
}
//console.log(dbURL)
const sequelize = new Sequelize(config.url, config)
/*
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
*/
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;