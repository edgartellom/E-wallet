const axios = require("axios");
const { Order, User, Cart } = require("../db");

const getDbInfo = async () => {
  return await Order.findAll({
    include: [
      { model: User, attributes: ["id"] },
      { model: Cart, attributes: ["id"] },
    ],
  });
};

const getAllOrders = async () => {
  let allOrders = await getDbInfo();
  return allOrders;
};

module.exports = {
  getAllOrders,
};
