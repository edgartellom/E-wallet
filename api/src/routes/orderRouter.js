const { Router } = require('express');
const { Phone, Order, Category, User } = require("../db");

const router = Router()

router.get("/", async  (req, res, next) => {
    try {
    
    } catch (error) {
        next(error)
    }
});


module.exports = router;
