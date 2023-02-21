const { Router } = require("express");
const { Phone, Order, Category, User } = require("../db");
require("dotenv").config();
const STRIPE_API_KEY = process.env.STRIPE_API_KEY;
const Stripe = require("stripe");

const stripe = new Stripe(STRIPE_API_KEY);

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const { id, amount } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "product.brand product.name",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    res.send({ message: "Succesfull payment" });
  } catch (error) {
    next(error);
    res.json({ message: error.raw.message });
  }
});

module.exports = router;
