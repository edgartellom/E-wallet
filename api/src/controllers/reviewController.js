const axios = require("axios");
const { Review, Phone, User } = require("../db");

const getDbInfo = async () => {
  return await Review.findAll({
    include: [
      { model: Phone, attributes: ["id"] },
      { model: User, attributes: ["id"] },
    ],
  });
};

const getAllReviews = async () => {
  let allReviews = await getDbInfo();
  return allReviews;
};

module.exports = {
  getAllReviews,
};
