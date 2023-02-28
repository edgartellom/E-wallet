const axios = require("axios");
const { Cart, User } = require("../db");

const getDbInfo = async (userId) => {
  try {
    const carts = await Cart.findAll({
      where: {
        userId,
        state: true,
      },
      include: { model: User, attributes: ["id"] },
    });
    if (carts.length > 0) {
      return { carts: carts, status: "success" };
    }
    return { message: "Not Found", status: "error" };
  } catch (error) {
    return { message: error, status: "error" };
  }
};

const createCart = async (cart) => {
  try {
    const { userId } = await cart;
    console.log(userId);
    let user = await User.findByPk(userId);
    if (user) {
      let cartCreated = await Cart.create({ ...cart, userId: user.id });
      return {
        cartCreated,
        message: "Cart created succesfully",
        status: "success",
      };
    } else {
      return { message: "User Not Found", status: "error" };
    }
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const updateCart = async (cart) => {
  const { id, toTalPrice, state } = cart;
  try {
    const cartFromDb = Cart.findByPk(id);
    if (cartFromDb) {
      cartFromDb.update({
        toTalPrice,
        state,
      });
    }
    return { message: "Cart updated succesfully", status: "success" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

module.exports = {
  getDbInfo,
  createCart,
  updateCart,
};
