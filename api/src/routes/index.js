const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const phoneRouter = require("./phoneRouter");
const orderRouter = require("./orderRouter");
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
const checkoutRouter = require("./checkoutRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/phones", phoneRouter);
router.use("/orders", orderRouter);
router.use("/users", userRouter);
router.use("/categories", categoryRouter);
router.use("/checkout", checkoutRouter);
module.exports = router;
