const { Order_detail, Phone, Order } = require("../db");

const getDbInfo = async (orderId) => {
  try {
    const listDetail = Order_detail.findAll({
      where: {
        orderId,
        state: true,
      },
      include: [
        { model: Phone, attributes: ["id"] },
        { model: Order, attributes: ["id"] },
      ],
    });
    return { list: listDetail, status: "success" };
  } catch (error) {
    return { message: error.message, status: "error" };
  }
};

const createDetail = async (details) => {
  // [{ price: ..., quantity: ..., orderId: ..., phoneId: ... }] => details;
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
    const detailFromDb = Order_detail.findByPk(id);
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
