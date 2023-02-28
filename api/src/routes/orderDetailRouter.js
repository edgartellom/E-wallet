const { Router } = require("express");
const { Order_detail } = require("../db");
const {
  getDbInfo,
  updateDetail,
  createDetail,
} = require("../controllers/orderDetailController");

const router = Router();
router.get("/", (req, res) => {
  res.send(getDbInfo(req.body));
});

router.post("/", (req, res) => {
  res.send(createDetail(req.body));
});

router.put("/", (req, res) => {
  res.send(updateDetail(req.body));
});

module.exports = router;
