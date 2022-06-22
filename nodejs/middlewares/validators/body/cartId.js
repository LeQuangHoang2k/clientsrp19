const { param } = require("express-validator");
const { CartsModel } = require("../../../models/Carts/carts");
const { verifyInfor } = require("../../verifyInfor");

exports.checkCartId = async (req, res, next) => {
  await param("id", "Undefined or null").exists({ checkFalsy: true }).run(req);

  await param("id", "Length must be 24")
    .isLength({ min: 24, max: 24 })
    .run(req);

  await param("id", "Invalid format")
    .matches(/[a-z0-9]/)
    .run(req);
};

exports.checkCartIdNotMatch = async (req, res, next) => {
  await param("id")
    .custom(async (value) => {
      const cartFind = await CartsModel.findOne({ _id: value });

      if (!cartFind) return Promise.reject("not match");

      //   await saveProductInRequest(req, productFind);
    })
    .run(req);
};

// const saveProductInRequest = async (req, data) => {
//   req.custom = { ...req.custom, productDB: data };
// };
