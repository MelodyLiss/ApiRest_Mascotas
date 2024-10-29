const {Router} = require('express');
const router =  Router();
const {findAllCuidadorController,findByIdCuidadorController,findByNombreCuidadorController,findByApellidoCuidadorController,findByRutCuidadorController,createCuidadorController,updateCuidadorController,deleteCuidadorController} = require('../controllers/cuidador')

router.get('/',findAllCuidadorController);

router.get('/id/:id',findByIdCuidadorController );
router.get('/nombre/:nombre',findByNombreCuidadorController);
router.get('/apellido/:apellido',findByApellidoCuidadorController );
router.get('/rut/:rut',findByRutCuidadorController);

router.post('/crearCuidador', createCuidadorController);
router.put('/actualizar/:id', updateCuidadorController);
router.delete('/eliminarId', deleteCuidadorController); 


// router.get('*', (req, res) => {
//     res.send('funciona por favor TwT');});


module.exports = router;

