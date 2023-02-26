const { Router } = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
} = require("../controllers/userController");
const { User } = require("../db");

const router = Router();
router.get("/", async (req, res) => {
  try {
    let response = await getAllUsers();
    if (response.status) {
      res.send(response.users);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/", (req, res) => {
  res.send(createUser(req.body));
});

router.put("/", (req, res) => {
  res.send(updateUser(req.body));
});

module.exports = router;
