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
    if (reviews.length > 0) {
      return { data: reviews, status: "success" };
    }
    return { message: "Reviews Not Found", status: "error" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const createReview = async (review) => {
  const { phoneId, userId } = review;
  try {
    let phone = await Phone.findByPk(phoneId);
    let user = await User.findByPk(userId);
    if (phone && user) {
      let reviewCreated = await Review.create({
        ...review,
        phoneId: phone.id,
        userId: user.id,
      });
      return {
        reviewCreated,
        message: "Review created succesfully",
        status: "success",
      };
    } else {
      return { message: "Invalid Review", status: "error" };
    }
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const updateReview = async (review) => {
  const { id, rate, comment, state } = review;
  try {
    const reviewFromDb = await Review.findByPk(id);
    if (reviewFromDb) {
      reviewFromDb.update({
        rate,
        comment,
        state,
      });
      return { message: "Review updated succesfully", status: "success" };
    }
    return { message: "Review Not Found", status: "error" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

module.exports = {
  getDbInfo,
  createReview,
  updateReview,
};
