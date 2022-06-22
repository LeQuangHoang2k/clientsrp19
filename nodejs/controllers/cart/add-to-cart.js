const { fakeCart } = require("../../data/backup/cart");
const { CartsModel } = require("../../models/Carts/carts");
const { resetRequest } = require("../../utils/reset-request");

exports.addToCart = async (req, res) => {
  var newAccessToken = req.accessToken ? req.accessToken : undefined;

  console.log(req.custom.payload);

  const cartSave = new CartsModel({
    user_id: req.custom.payload.data._id,
    cart: fakeCart,
  });

  await cartSave.save();

  res.json({
    message: "123",
    accessToken: newAccessToken,
  });

  resetRequest(req);
};
