const { Router } = require("express");
const {
  getDbInfo,
  createOrder,
  updateOrder,
} = require("../controllers/orderController");

const router = Router();
router.get("/", (req, res) => {
  res.send(getDbInfo(req));
});

router.post("/", (req, res) => {
  res.send(createOrder(req));
});

router.put("/", (req, res) => {
  res.send(updateOrder(req));
});

module.exports = router;
