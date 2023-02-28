const { Router, response } = require("express");
const {
  getDbInfo,
  createCart,
  updateCart,
} = require("../controllers/cartController");
// const { Cart } = require("../db");

const router = Router();

//GET CARTS BY USER ID
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
    let response = await createCart(req.body);
    response.status !== "error"
      ? res.send(response)
      : res.status(404).send(response);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put("/", (req, res) => {
  res.send(updateCart(req.body));
});

module.exports = router;
