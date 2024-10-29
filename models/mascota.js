const { DataTypes} = require('sequelize');
const sequelize = require('../database/conexion.js')

const Mascota = sequelize.define('mascotas',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    especie:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    raza:{
        type:DataTypes.STRING(20),
    },
    edad:{
        type:DataTypes.INTEGER
    },
    genero:{
        type:DataTypes.STRING(10)
    }
},{
    tableName:'mascotas',
    timestamps:false
});

module.exports = Mascota;
// <> Para sincronizar con mi BBDD
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