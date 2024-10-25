const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('postgres://postgres:hola123@localhost:5432/mascotas');

module.exports = sequelize;