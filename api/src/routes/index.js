const { Router } = require('express');
const axios = require ('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { bdInfo, bdId, postAct } = require ('../controllers/controllers');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', bdInfo);
router.get('/countries/:id', bdId);
router.post('/activities', postAct)

module.exports = router;
