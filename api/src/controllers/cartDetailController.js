const axios = require("axios");
const { Cart_Detail, Phone, Cart } = require("../db");

const getDbInfo = async () => {
  return await Cart_Detail.findAll({
    include: [
      { model: Phone, attributes: ["id"] },
      { model: Cart, attributes: ["id"] },
    ],
  });
};

const getAllCartDetails = async () => {
  let allCartDetails = await getDbInfo();
  return allCartDetails;
};

module.exports = {
  getAllCartDetails,
};
