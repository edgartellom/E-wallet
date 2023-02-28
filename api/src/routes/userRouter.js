const { Router } = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
} = require("../controllers/userController");
const { User } = require("../db");

const router = Router();

//GET ALL USERS
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

router.post("/", async (req, res) => {
  try {
    let response = await createUser(req.body);
    response.status !== "error"
      ? res.send(response)
      : res.status(404).send(response);
  } catch (error) {
    res.status(400).send(err.message);
  }
});

router.put("/", (req, res) => {
  res.send(updateUser(req.body));
});

module.exports = router;
