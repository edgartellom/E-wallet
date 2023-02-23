const axios = require("axios");
const { Order_Detail, Phone, Order } = require("../db");

const getDbInfo = async () => {
  return await Order_Detail.findAll({
    include: [
      { model: Phone, attributes: ["id"] },
      { model: Order, attributes: ["id"] },
    ],
  });
};

const getAllOrderDetails = async () => {
  let allOrderDetails = await getDbInfo();
  return allOrderDetails;
};

module.exports = {
  getAllOrderDetails,
};
