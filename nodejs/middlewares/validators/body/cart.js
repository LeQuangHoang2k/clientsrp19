const { body } = require("express-validator");
const { CartsModel } = require("../../../models/Carts/carts");
const { verifyInfor } = require("../../verifyInfor");

exports.checkCart = async (req, res, next) => {
  await body("cart", "Undefined or null").exists({ checkFalsy: true }).run(req);

  // check name
  await body("cart.*.name", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("cart.*.name", "Length from 3 to 255")
    .isLength({ min: 3, max: 255 })
    .run(req);

  await body("cart.*.name", "Invalid format")
    .matches(/^[a-zA-Z0-9#\s]+$/)
    .run(req);

  // check price
  await body("cart.*.price", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("cart.*.price", "Invalid format")
    .matches(/^[0-9]+$/)
    .run(req);

  await body("cart.*.price", "Not a number").isNumeric().run(req);
  await body("cart.*.price", "Must be decimal").isDecimal().run(req);
  await body("cart.*.price", "Must be better than 0")
    .isInt({ min: 1 })
    .run(req);
};

// exports.checkCartIdNotMatch = async (req, res, next) => {
//   await body("cart_id")
//     .custom(async (value) => {
//       const cartFind = await CartsModel.findOne({ _id: value });

//       if (!cartFind) return Promise.reject("not match");

//       //   await saveProductInRequest(req, cartFind);
//     })
//     .run(req);
// };

// const saveProductInRequest = async (req, data) => {
//   req.custom = { ...req.custom, productDB: data };
// };
