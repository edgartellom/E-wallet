const { Router } = require("express");
const {
  getDbInfo,
  createCart,
  updateCart,
} = require("../controllers/cartController");
const { Cart } = require("../db");

const router = Router();
router.get("/", (req, res) => {
  res.send(getDbInfo(req));
});

router.post("/", (req, res) => {
  console.log(req);
  res.send(createCart(req));
});

router.put("/", (req, res) => {
  res.send(updateCart(req));
});

module.exports = router;
