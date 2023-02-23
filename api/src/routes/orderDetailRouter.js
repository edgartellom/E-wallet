const { Router } = require("express");
const { Order_detail } = require("../db");

const router = Router();
router.get("/", async (req, res, next) => {
  try {
    const allOrderDetails = await Order_detail.findAll();
    res.status(200).send(allOrderDetails);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
