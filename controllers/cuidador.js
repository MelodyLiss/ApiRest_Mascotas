
const { Model } = require('sequelize');
const { findAllCuidador,findAttributeCuidador,updateCuidador,createCuidador,deleteCuidador } = require('../service/cuidador')

const findAllCuidadorController = async (req, res) => {
    const respuesta = await findAllCuidador();
    res.json(respuesta);
}

const findByIdCuidadorController = async (req, res) => {
    const { id } = req.params;
    const respuesta = await findAttributeCuidador('id', id);
    res.json(respuesta);

};

const findByNombreCuidadorController = async (req, res) => {
    
    const { nombre } = req.params;
    const respuesta = await findAttributeCuidador('nombre', nombre);
    res.json(respuesta);

};

const findByApellidoCuidadorController = async (req, res) => {
    const { apellido } = req.params;
    const respuesta = await findAttributeCuidador('apellido', apellido);
    res.json(respuesta);

};

const findByRutCuidadorController = async (req, res) => {
    const { rut } = req.params;
    const respuesta = await findAttributeCuidador('rut', rut);
    res.json(respuesta);
};


const updateCuidadorController = async (req, res) => {
    const { id } = req.params;
    const { nombre,apellido,rut} = req.body;
    const respuesta = await updateCuidador(id, nombre,apellido,rut);
    res.json(respuesta);
};

const createCuidadorController = async (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const rut = req.body.rut;
    
    console.log("Datos recibidos:", { nombre, apellido, rut });
    const respuesta = await createCuidador(nombre, apellido, rut);
    // res.json(respuesta);

}

const deleteCuidadorController = async (req, res) => {
    const id = req.query.id;
    const respuesta = await deleteCuidador(id);
    res.json(respuesta);


}



module.exports = {findAllCuidadorController,findByIdCuidadorController,findByNombreCuidadorController,findByApellidoCuidadorController,findByRutCuidadorController,createCuidadorController,updateCuidadorController,deleteCuidadorController}

