const { Router } = require("express");
const { Order_detail } = require("../db");
const {
  getDbInfo,
  updateDetail,
  createDetail,
} = require("../controllers/orderDetailController");

const router = Router();
router.get("/", (req, res) => {
  res.send(getDbInfo(req));
});

router.post("/", (req, res) => {
  res.send(createDetail(req));
});

router.put("/", (req, res) => {
  res.send(updateDetail(req));
});

module.exports = router;
