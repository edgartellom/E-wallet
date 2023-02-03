const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Phone =require ('./Product.js')
const users = require('./User.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/Product',Phone)
router.use('/User' , users)
//router.use('/Diet', Diet)
 
module.exports = router;