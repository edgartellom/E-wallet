const { Cart_detail, Phone, Cart } = require("../db");

const getDbInfo = async (cartId) => {
  try {
    const listDetail = await Cart_detail.findAll({
      where: {
        cartId,
        state: true,
      },
      include: [
        { model: Phone, attributes: ["id"] },
        { model: Cart, attributes: ["id"] },
      ],
    });
    if (listDetail.length > 0) {
      return { list: listDetail, status: "success" };
    }
    return { message: "Cart Details Not Found", status: "error" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const createDetail = async (details) => {
  // [{ price: ..., quantity: ..., cartId: ..., phoneId: ... }] => details;
  try {
    let isValid = true;
    for (let detail in details) {
      if (!detail.cartId || !detail.phoneId) isValid = false;
    }
    if (isValid) {
      let detailsCreated = await Cart_detail.bulkCreate(details);
      return {
        detailsCreated,
        message: "Details created succesfully",
        status: "success",
      };
    } else {
      return { message: "Invalid Details", status: "error" };
    }
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const updateDetail = async (detail) => {
  const { id, price, quantity, state } = detail;
  try {
    const detailFromDb = await Cart_detail.findByPk(id);
    if (detailFromDb) {
      detailFromDb.update({
        price,
        quantity,
        state,
      });
    }
    return { message: "Detail updated succesfully", status: "success" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

module.exports = {
  getDbInfo,
  createDetail,
  updateDetail,
};
