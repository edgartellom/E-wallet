const { Router } = require("express");
const { User } = require("../db");
const { getAllUsers } = require("../controllers/userController");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    try {
      const allUsers = await User.findAll();
      res.status(200).send(allUsers);
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req,res,next) => {
  try {
    const { id } = req.params;
    if(id){
      const userId = await getAllUsers();
      userId.length ?
      res.status(200).send(userId)
      : res.status(400).send("Not Found UserId")
    }
  } catch (error) {
    next(error);
  }
})

module.exports = router;
