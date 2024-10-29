const Mascota = require('../models/mascota')
const Cuidador = require('../models/cuidador');
const { Op ,Sequelize } = require('sequelize');


const findAllCuidador = async () => {
    try {
        const cuidadores = await Cuidador.findAll({
            include: [{
                model: Mascota,
                // attributes: ['nombre'],  por si quiero filtrar por algun atributo como el nombre :D
            }]
        });
        if (cuidadores.length == 0) {
            return {
                msg: 'no hay cuidadores registrados',
                status: 204,
                datos: []
            }
        }
        return {
            msg: 'Listado actual de cuidadores',
            status: 200,
            datos: cuidadores.map(cuidador => cuidador.toJSON())
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

const findAttributeCuidador = async (clave, valor) => {
    try {
        let condiciones;

        if (clave === 'id') {
           // parseamos directamente 
            condiciones = { id: parseInt(valor, 10) };
        } else {
            // Aplicamos `unaccent` para los acentos  `iLike` para comparar con o sin acentos
            condiciones = Sequelize.where(
                Sequelize.fn('unaccent', Sequelize.col(`cuidador.${clave}`)),
                { [Op.iLike]: Sequelize.fn('unaccent', `%${valor}%`) }
            );
        }

        const cuidador = await Cuidador.findAll({
            where: condiciones,
            include: [{
                model: Mascota,
            }]
        });

        if (cuidador.length === 0) {
            return {
                msg: `No se encontraron resultados para ${clave} = ${valor}`,
                status: 204, 
                datos: []
            };
        }

        return {
            msg: `Búsqueda realizada por ${clave} = ${valor}`,
            status: 201,
            datos: cuidador
        };
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        };
    }
};


const updateCuidador = async (id,nombre,apellido,rut) => {
try {
    const cuidador = await Cuidador.findByPk(id);

    if(!cuidador){
        return {
            msg: `No se ha encontrado el cuidador asociada al id ${id}`,
            status: 204,
            datos: []
        }
    }
    if(cuidador){
        if(nombre){
            cuidador.nombre =nombre;
        }
        if(apellido){
            cuidador.apellido=apellido;
        }
        if(rut){
            cuidador.rut=rut;
        }
    }
        await cuidador.save();
        return {
            msg: 'Cuidador actualizada con éxito',
            status: 200,
            datos: cuidador
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

const createCuidador = async (nombre,apellido,rut) => {
    try {
        const nuevoCuidador = await Cuidador.create({
            nombre,
            apellido,
            rut
        });
    
        const cuidadores = await Cuidador.findAll();
        return {
            msg: `El cuidador/a ${nombre} fue insertada correctamente.`,
            status: 200,
            datos: cuidadores.map(cuidador=> cuidador.toJSON())
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

const deleteCuidador = async (id) => {

    try {
        const cuidador = Cuidador.destroy({where:{id}});
        const cuidadores = await Cuidador.findAll();
        return {
            msg: `El/la cuidador/a asociado/a al id ${id} ha sido eliminada correctamente.`,
            status: 200,
            datos: cuidadores.map(cuidador=> cuidador.toJSON())
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
findAllCuidador,
findAttributeCuidador,
updateCuidador,
createCuidador,
deleteCuidador
}