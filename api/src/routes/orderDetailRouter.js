const { Router } = require("express");
const { Category } = require("../db");

const router = Router();
router.get("/", async (req, res, next) => {
  try {
    const allCategories = await Category.findAll();
    res.status(200).send(allCategories);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
