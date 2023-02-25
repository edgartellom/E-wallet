const { Router, response } = require("express");
const {
  getDbInfo,
  createCart,
  updateCart,
} = require("../controllers/cartController");
// const { Cart } = require("../db");

const router = Router();
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try{
    let response=await getDbInfo(id)
    res.send(response);
  }catch(err){
    send.status(400).send(err);
  }
  
});

router.post("/", async (req, res) => {
  try{
    let response= await createCart(req)
    res.send(response);
  }catch(err){
    res.status(400).send(err.message);
  }
});

router.put("/", (req, res) => {
  res.send(updateCart(req));
});

module.exports = router;
