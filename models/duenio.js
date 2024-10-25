const { DataTypes} = require('sequelize');
const sequelize = require('../database/conexion.js');
const Mascota =require('./mascota.js');

const Duenio = sequelize.define('duenio',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull:false
    },
    rut:{
        type:DataTypes.STRING,
        unique:true
    }
},{
    tableName:'duenios',
    timestamps:false
});

Duenio.hasMany(Mascota,{
    foreignKey:{
        name:'duenio_id'
    }
});

Mascota.belongsTo(Duenio,{
    foreignKey:{
        name:'duenio_id'
    }
});