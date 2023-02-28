const { Router } = require("express");
const {
  getDbInfo,
  createOrder,
  updateOrder,
} = require("../controllers/orderController");

const router = Router();
router.get("/", (req, res) => {
  res.send(getDbInfo(req.body));
});

router.post("/", (req, res) => {
  res.send(createOrder(req.body));
});

router.put("/", (req, res) => {
  res.send(updateOrder(req.body));
});

module.exports = router;
