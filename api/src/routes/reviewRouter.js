const { Router } = require("express");
const { Review } = require("../db");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    try {
      const allReviews = await Review.findAll();
      res.status(200).send(allReviews);
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
