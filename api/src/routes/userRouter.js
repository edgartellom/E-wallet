const { Router } = require("express");
const { User } = require("../db");

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

// router.get("/:id", async (req,res,next) => {
//   try {
//     const { id } = req.params;
//     if(id){
      
//     }
//   } catch (error) {
    
//   }
// })

module.exports = router;
