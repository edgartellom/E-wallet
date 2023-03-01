const { Router } = require("express");
const {
  getDbInfo,
  updateDetail,
  createDetail,
} = require("../controllers/cartDetailController");

 const router = Router();
// router.get("/:id", (req, res) => {
//   let response = req.params
//   res.send(getDbInfo(req.body));
// });

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let response = await getDbInfo(id);
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/", (req, res) => {
  res.send(createDetail(req.body));
});

router.put("/", (req, res) => {
  res.send(updateDetail(req.body));
});

module.exports = router;
