const { Router } = require("express");
const { Cart_detail } = require("../db");

const router = Router();
router.get("/", async (req, res, next) => {
  try {
    const allCartDetails = await Cart_detail.findAll();
    res.status(200).send(allCartDetails);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
