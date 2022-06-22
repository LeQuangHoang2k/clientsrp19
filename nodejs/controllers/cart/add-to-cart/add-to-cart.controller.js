const { fakeCart } = require("../../../data/backup/cart");
const { CartsModel } = require("../../../models/Carts/carts");
const { resetRequest } = require("../../../utils/reset-request");

exports.addToCart = async (req, res) => {
  await CartsModel.updateOne(
    {
      user_id: req.custom.payload.data._id,
      _id: req.body.cart_id,
      state: 1,
    },
    { $set: { cart: req.body.cart } },
    { upsert: true } // Make this update into an upsert
  );

  res.json({
    message: "Update success",
    accessToken: req.accessToken ? req.accessToken : undefined,
  });

  resetRequest(req);
};
