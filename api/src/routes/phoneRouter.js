const { Router } = require('express');
const { Phone, Order, Category, User } = require("../db");

const router = Router()

router.get("/", async  (req, res, next) => {
    try {
        const phones = await Phone.findAll();
        res.status(200).send(phones);
    } catch (error) {
        next(error)
    }
});

module.exports = router;

