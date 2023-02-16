const axios = require("axios");
const { Order } = require("../db");

const getAllOrders = async () => {
  let allOrders = await Order.findAll();
  return allOrders;
};

module.exports = {
  getAllOrders,
};
