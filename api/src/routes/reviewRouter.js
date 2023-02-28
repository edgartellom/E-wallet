const { Router } = require("express");
const {
  getDbInfo,
  createReview,
  updateReview,
} = require("../controllers/reviewController");
const { Review } = require("../db");

const router = Router();

//GET REVIEWS BY PHONE ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let response = await getDbInfo(id);
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    let response = await createReview(req.body);
    response.status !== "error"
      ? res.send(response)
      : res.status(404).send(response);
  } catch (error) {
    res.status(400).send(err.message);
  }
});

router.put("/", (req, res) => {
  res.send(updateReview(req.body));
});

module.exports = router;
