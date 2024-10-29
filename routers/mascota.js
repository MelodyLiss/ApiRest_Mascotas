const {Router} = require('express');
const router =  Router();
const {findAllMascotasController,findByIdController,findByNombreController,findByEspecieController,findByRazaController,findByGeneroController,findByEdadController,updateMascotasController,createMascotaController,deleteMascotaController,preInsertController} = require('../controllers/mascota')

router.get('/',findAllMascotasController);

router.get('/id/:id',findByIdController );
router.get('/nombre/:nombre',findByNombreController );
router.get('/raza/:raza',findByRazaController );
router.get('/especie/:especie',findByEspecieController);
router.get('/edad/:edad',findByEdadController );
router.get('/genero/:genero',findByGeneroController );

router.get('/admin',preInsertController)

router.post('/crearMascota', createMascotaController);
router.put('/actualizar/:id', updateMascotasController);
router.delete('/eliminarId', deleteMascotaController); 


// router.get('*', (req, res) => {
//     res.send('funciona por favor TwT');});


module.exports = router;

