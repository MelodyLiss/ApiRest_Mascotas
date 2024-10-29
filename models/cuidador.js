const { DataTypes} = require('sequelize');
const sequelize = require('../database/conexion.js');
const Mascota =require('./mascota.js');

const Cuidador = sequelize.define('cuidador',{
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
    tableName:'cuidadores',
    timestamps:false
});

Cuidador.hasMany(Mascota,{
    foreignKey:{
        name:'cuidador_id'
    }
});

Mascota.belongsTo(Cuidador,{
    foreignKey:{
        name:'cuidador_id',
        allowNull: false
    }
});

module.exports =Cuidador;

// const test = () =>{
//     sequelize.sync({ alter: true })
// .then(() => {
//     console.log("Las tablas existentes se han sincronizado.");
// })
// .catch(err => {
//     console.error("Error al sincronizar la tabla:", err);
// });
// }

// test()