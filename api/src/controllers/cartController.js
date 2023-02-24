const axios = require("axios");
const { Cart, User } = require("../db");

const getDbInfo = async () => {
  return await Cart.findAll({
    include: { model: User, attributes: ["id"] },
  });
};

const getAllCarts = async () => {
  let allCarts = await getDbInfo();
  return allCarts;
};

module.exports = {
  getAllCarts,
};
