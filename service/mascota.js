const Mascota = require('../models/mascota')
const { Op } = require('sequelize');

const findAllMascotas = async () => {
    try {
        const mascotas = await Mascota.findAll();
        if (mascotas.length == 0) {
            return {
                msg: 'no hay mascotas registradas',
                status: 204,
                datos: []
            }
        }
        return {
            msg: 'Listado actual de mascotas',
            status: 200,
            datos: mascotas.map(mascota => mascota.toJSON())
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
};

const findAttributeMascotas = async (clave, valor) => {
    try {
        const condiciones = {};
        if (clave === 'id' || clave === 'edad') {
            condiciones[clave] = parseInt(valor, 10); //tuve que parcearlo porque me lo convertia en string 
        } else {
            condiciones[clave] = { [Op.iLike]: valor }; 
        }
        const mascota = await Mascota.findAll({ where: condiciones});
        return{
            msg: `Búsqueda realizada por ${clave} = ${valor}`,
            status: 201,
            datos: mascota
        }

    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
};

const updateMascotas = async (id,nombre,especie,raza,edad,genero) => {
try {
    const mascota = await Mascota.findByPk(id);

    if(!mascota){
        return {
            msg: `No se ha encontrado la mascota asociada al id ${id}`,
            status: 204,
            datos: []
        }
    }
    if(mascota){
        if(nombre){
            mascota.nombre =nombre;
        }
        if(especie){
            mascota.especie=especie;
        }
        if(raza){
            mascota.raza=raza;
        }
        if(edad){
            mascota.edad=edad;
        }
        if(genero){
            mascota.genero=genero;
        }
    }
        await mascota.save();
        return {
            msg: 'Mascota actualizada con éxito',
            status: 200,
            datos: mascota
        };
} catch (error) {
    console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
}
}

const createMascota = async (nombre,especie,raza,edad,genero) => {
    try {
        const nuevaMascota = await Mascota.create({
            nombre,
            especie,
            raza,
            edad,
            genero
        });
    
        const mascotas = await Mascota.findAll();
        return {
            msg: `La mascota ${nombre} fue insertada correctamente.`,
            status: 200,
            datos: mascotas.map(mascota=> mascota.toJSON())
        };


    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const deleteMascota = async (id) => {

    try {
        const mascota = Mascota.destroy({where:{id}});
        const mascotas = await Mascota.findAll();
        return {
            msg: `La mascota asociada al id ${id} ha sido eliminada correctamente.`,
            status: 200,
            datos: mascotas.map(mascota=> mascota.toJSON())
        };


    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
    
}

module.exports = {
    findAllMascotas,
    findAttributeMascotas,
    updateMascotas,
    createMascota,
    deleteMascota
}