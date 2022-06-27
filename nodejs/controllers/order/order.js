// const { fakeCart } = require("../../../data/backup/cart");
// const { CartsModel } = require("../../../models/Carts/carts");
const { OrdersModel } = require("../../models/Orders/orders");
const { resetRequest } = require("../../utils/reset-request");

exports.createOrder = async (req, res) => {
  var newAccessToken = req.custom.accessToken
    ? req.custom.accessToken
    : undefined;

  const { body, custom } = req;
  console.log(
    "🚀 ~ file: order.js ~ line 8 ~ exports.createOrder= ~ body,custom",
    body,
    custom
  );

  // repo
  const orderSave = new OrdersModel({
    user_id: req.body.user_id,
    receiver_name: req.body.receiver_name,
    receiver_city: req.body.receiver_city,
    receiver_district: req.body.receiver_district,
    receiver_ward: req.body.receiver_ward,
    receiver_address: req.body.receiver_address,
  });

  await orderSave.save();

  console.log(
    "🚀 ~ file: order.js ~ line 16 ~ exports.createOrder= ~ orderSave",
    orderSave._id
  );

  res.json({
    message: 123,
    accessToken: newAccessToken,
  });

  resetRequest(req);
};