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
    return { list: listDetail, status: "success" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const createDetail = async (details) => {
  // [{ price: ..., quantity: ..., cartId: ..., phoneId: ... }] => details;
  try {
    Cart_detail.bulkCreate(details);
    return { message: "Detail created succesfully", status: "success" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const updateDetail = async (detail) => {
  const { id, price, quantity, state } = detail;
  try {
    const detailFromDb = Cart_detail.findByPk(id);
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
