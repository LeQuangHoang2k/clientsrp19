const { body } = require("express-validator");
const { CartsModel } = require("../../../models/Carts/carts");
const { verifyInfor } = require("../../verifyInfor");

exports.checkCartId = async (req, res, next) => {
  await body("cart_id", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("cart_id", "Length must be 24")
    .isLength({ min: 24, max: 24 })
    .run(req);

  await body("cart_id", "Invalid format")
    .matches(/[a-z0-9]/)
    .run(req);
};

exports.checkCartIdNotMatch = async (req, res, next) => {
  await body("cart_id")
    .custom(async (value) => {
      const cartFind = await CartsModel.findOne({ _id: value });

      if (!cartFind) return Promise.reject("not match");
    })
    .run(req);
};
