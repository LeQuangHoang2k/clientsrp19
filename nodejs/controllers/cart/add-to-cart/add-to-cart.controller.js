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
// const { fakeCart } = require("../../../data/backup/fake-cart");
// const { CartsModel } = require("../../../models/Carts/carts");
// const { resetRequest } = require("../../../utils/reset-request");

// exports.addToCart = async (req, res) => {
//   // await CartsModel.updateOne(
//   //   {
//   //     user_id: req.custom.payload.data._id,
//   //     _id: req.body.cart_id,
//   //     state: 1,
//   //   },
//   //   { $set: { cart: req.body.cart } },
//   //   { upsert: true } // Make this update into an upsert
//   // );

//   const abc = await new CartsModel({ 
//     user_id: req.custom.payload.data._id,
//     state: 1,
//     cart: [
//       {
//         _id: "62b014e2a4fd7db9b18c0d57",
//         name: null,

//         // name: `iphone 12 pro max #1`,
//         price: 20000000,
//         image: "http://abc.com",
//         quantity: 10,
//         tax: 10,
//         description: "Đây là sản phẩm chất lượng cao và lâu đời",
//       },
//       {
//         _id: "62b01587a4fd7db9b18c0d58",
//         name: "iphone 12 pro max #2",
//         price: 20000000,
//         image: "http://abc.com",
//         quantity: 5,
//         tax: 5,
//         description: "Đây là sản phẩm chất lượng cao và lâu đời",
//       },
//     ],
//   });

//   // console.log(
//   //   "🚀 ~ file: add-to-cart.controller.js ~ line 40 ~ exports.addToCart= ~ abc",
//   //   abc
//   // );

//   let error = abc.validateSync();

//   // const firstKey = Object.keys(error.errors)[0];
//   // const message = error.errors[firstKey].properties.message;
//   // console.log(
//   //   "🚀 ~ file: add-to-cart.controller.js ~ line 50 ~ exports.addToCart= ~ message",
//   //   message
//   // );

//   res.json({
//     message: "Update success",
//     accessToken: req.accessToken ? req.accessToken : undefined,
//   });
//   resetRequest(req);
// };
