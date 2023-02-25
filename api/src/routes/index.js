const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const phoneRouter = require("./phoneRouter");
const orderRouter = require("./orderRouter");
const orderDetailRouter = require("./orderDetailRouter");
const reviewRouter = require("./reviewRouter");
const cartRouter = require("./reviewRouter");
const cartDetailRouter = require("./cartDetailRouter");
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
// const checkoutRouter = require("./checkoutRouter");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/phones", phoneRouter);
router.use("/orders", orderRouter);
router.use("orderDetails", orderDetailRouter);
router.use("/users", userRouter);
router.use("/categories", categoryRouter);
// router.use("/reviews", reviewRouter);
router.use("/carts", cartRouter);
router.use("/cartDetails", cartDetailRouter);
// router.use("/checkout", checkoutRouter);
module.exports = router;
