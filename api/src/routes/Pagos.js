const { Router } = require('express');
const { Phone, Order, Category, User } = require("../db");
const Stripe = require("stripe");

const stripe = new Stripe('sk_test_51Mbqo8Di8RzuUuAW302xacQjhy9bHPHoPCaXYiueZZTAkWYOJd0NGMGRzfRFVat5UVtzn9XHlSj14AMdTXZ88ats00YL9gFQP3');


const router = Router()




router.post("/Chetkout", async(req, res, next) => {
    
    const {id, amount}= req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Gaming Keyboard",
            payment_method: id,
            confirm: true, 
        })
        console.log(payment);

    } catch (error) {
        next(error)
    }
})

module.exports = router;
