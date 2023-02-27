const axios = require("axios");
const { Review, Phone, User } = require("../db");

const getDbInfo = async (phoneId) => {
  try {
    const reviews = await Review.findAll({
      where: {
        phoneId,
        state: true,
      },
      include: [
        { model: Phone, attributes: ["id"] },
        { model: User, attributes: ["id"] },
      ],
    });
    return { reviews: reviews, status: "success" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const createReview = async (review) => {
  const { phoneId } = review;
  try {
    let phone = Phone.findByPk(phoneId);
    if (phone) {
      Review.create(review);
      return { message: "Review created succesfully", status: "success" };
    } else {
      return { message: "Invalid Phone", status: "error" };
    }
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const updateReview = async (review) => {
  const { id, rate, comment, state } = review;
  try {
    const reviewFromDb = Review.findByPk(id);
    if (reviewFromDb) {
      reviewFromDb.update({
        rate,
        comment,
        state,
      });
    }
    return { message: "Review updated succesfully", status: "success" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

module.exports = {
  getDbInfo,
  createReview,
  updateReview,
};
