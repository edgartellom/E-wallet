const { Router } = require("express");
const { Order_detail } = require("../db");
const {
  getDbInfo,
  updateDetail,
  createDetail,
} = require("../controllers/orderDetailController");

const router = Router();

//GET ORDER DETAILS BY ORDER ID
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
    let response = await createDetail(req.body);
    response.status !== "error"
      ? res.send(response)
      : res.status(404).send(response);
  } catch (error) {
    res.status(400).send(err.message);
  }
});

router.put("/", (req, res) => {
  res.send(updateDetail(req.body));
});

module.exports = router;
