const { Model } = require('sequelize');
const { findAllMascotas, findAttributeMascotas, updateMascotas, createMascota, deleteMascota } = require('../service/mascota')

const findAllMascotasController = async (req, res) => {
    const respuesta = await findAllMascotas();
    res.json(respuesta);
}

const findByIdController = async (req, res) => {
    const { id } = req.params;
    const respuesta = await findAttributeMascotas('id', id);
    res.json(respuesta);

};

const findByNombreController = async (req, res) => {
    const { nombre } = req.params;
    const respuesta = await findAttributeMascotas('nombre', nombre);
    res.json(respuesta);

};

const findByRazaController = async (req, res) => {
    const { raza } = req.params;
    const respuesta = await findAttributeMascotas('raza', raza);
    res.json(respuesta);

};

const findByEspecieController = async (req, res) => {
    const { especie } = req.params;
    const respuesta = await findAttributeMascotas('especie', especie);
    res.json(respuesta);

};

const findByEdadController = async (req, res) => {
    const { edad } = req.params;
    const respuesta = await findAttributeMascotas('edad', edad);
    res.json(respuesta);

};

const findByGeneroController = async (req, res) => {
    const { genero } = req.params;
    const respuesta = await findAttributeMascotas('genero', genero);
    res.json(respuesta);
};


const updateMascotasController = async (req, res) => {
    const { id } = req.params;
    const { nombre, especie, raza, edad, genero } = req.body;
    const respuesta = await updateMascotas(id, nombre, especie, raza, edad, genero);
    res.json(respuesta);
};

const createMascotaController = async (req, res) => {
    const nombre = req.body.nombre;
    const especie = req.body.especie;
    const raza = req.body.raza;
    const edad = req.body.edad;
    const genero = req.body.genero;

    console.log("Datos recibidos:", { nombre, especie, raza, edad, genero });
    // const respuesta = await createMascota(nombre, especie, raza, edad, genero);
    // res.json(respuesta);

}

const deleteMascotaController = async (req, res) => {
    const id = req.query.id;
    const respuesta = await deleteMascota(id);
    res.json(respuesta);


}
const preInsertController = (req,res ) => {
    res.redirect('/admin.html');
}


module.exports = {
    findAllMascotasController,
    findByIdController,
    findByNombreController,
    findByEspecieController,
    findByRazaController,
    findByGeneroController,
    findByEdadController,
    updateMascotasController,
    createMascotaController,
    deleteMascotaController,
    preInsertController
}

