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
    console.log(listDetail)
    console.log("first")
    return { list: listDetail, status: "success" };
  } catch (error) {
    console.log(error, "error18")
    return { message: error.message, status: "error" };
  }
};

const createDetail = async (details) => {
  // [{ price: ..., quantity: ..., cartId: ..., phoneId: ... }] => details;
  try {
    Cart_detail.bulkCreate(details);
    console.log(details, "post fromn api")
    return { message: "Detail created succesfully", status: "success" };
  } catch (error) {
    console.log("error30", error)
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


// {
// 	"carts": [
// 		{
// 			"id": "dcd61acf-9e3e-42c3-953a-aeb4b2115cbe",
// 			"totalPrice": "100.00",
// 			"state": true,
// 			"userId": "byNoKTMnl6eE0JtDcGJ9WP4iZZJ3",
// 			"user": {
// 				"id": "byNoKTMnl6eE0JtDcGJ9WP4iZZJ3"
// 			}
// 		}
// 	],
// 	"status": "success"
// }


// [{ 
// 	"price":10,
// 	"quantity":5,
// 	"state": true,
// 	"phoneId": "02ef052e-dc4b-4474-abd8-3a66c1783146",
// 	"cartId": "dcd61acf-9e3e-42c3-953a-aeb4b2115cbe"
	
// }
//  ]