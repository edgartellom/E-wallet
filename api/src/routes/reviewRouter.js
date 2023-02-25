const { Router } = require("express");
const {
  getDbInfo,
  createReview,
  updateReview,
} = require("../controllers/reviewController");
const { Review } = require("../db");

const router = Router();
router.get("/", (req, res) => {
  res.send(getDbInfo(req));
});

router.post("/", (req, res) => {
  res.send(createReview(req));
});

router.put("/", (req, res) => {
  res.send(updateReview(req));
});

module.exports = router;
