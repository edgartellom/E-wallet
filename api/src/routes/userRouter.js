const { Router } = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
} = require("../controllers/userController");
const { User } = require("../db");

const router = Router();
router.get("/", (req, res) => {
  res.send(getAllUsers());
});

router.post("/", (req, res) => {
  res.send(createUser(req));
});

router.put("/", (req, res) => {
  res.send(updateUser(req));
});

module.exports = router;
