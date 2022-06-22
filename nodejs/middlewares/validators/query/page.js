const { query } = require("express-validator");
const { ProductsModel } = require("../../../models/Products/products");
const { verifyInfor } = require("../../verifyInfor");

exports.checkPage = async (req, res, next) => {
  await query("page", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await query("page", "Not a number").isNumeric().run(req);
  await query("page", "Must be integer").isInt().run(req);
  await query("page", "Must be better than 0").isInt({ min: 1 }).run(req);
};

// exports.checkIdNotMatch = async (req, res, next) => {
//   await query("page")
//     .custom(async (value) => {
//       const productFind = await ProductsModel.findOne({ id: value });

//       if (!productFind) return Promise.reject("not match");

//       await saveProductInRequest(req, productFind);
//     })
//     .run(req);
// };

// const saveProductInRequest = async (req, data) => {
//   req.custom = { ...req.custom, productDB: data };
// };
