const { Router } = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  getUserById,
} = require("../controllers/userController");
const { User } = require("../db");


const router = Router();

//GET ALL USERS
router.get("/", async (req, res) => {
  try {
    let response = await getAllUsers();
    if (response.status === "success") {
      res.send(response.data);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//GET USER BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let response = await getUserById(id);
    response.status !== "error"
      ? res.send(response.data)
      : res.status(404).send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let response = await createUser(req.body);
    response.status !== "error"
      ? res.send(response)
      : res.status(404).send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/", async (req, res) => {
  try {
    let response = await updateUser(req.body);
    response.status !== "error"
      ? res.send(response)
      : res.status(404).send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


router.get("/:id", async (req,res,next) => {
  try {
    const { id } = req.params;
    if(id){
      const userId = await getAllUsers(id);
      userId.length ?
      res.status(200).send(userId)
      : res.status(400).send("Not Found UserId")
    }
  } catch (error) {
    next(error);
  }
}) 

module.exports = router;
