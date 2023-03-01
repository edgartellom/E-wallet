const { Router } = require("express");
const { Cart } = require("../db");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const allCarts = await Cart.findAll();
    res.status(200).send(allCarts);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
