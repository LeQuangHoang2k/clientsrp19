const { param } = require("express-validator");
const { ProductsModel } = require("../../models/Products/products");
const { verifyInfor } = require("../verifyInfor");

exports.checkId = async (req, res, next) => {
  await param("id", "Undefined or null").exists({ checkFalsy: true }).run(req);

  await param("id", "Not a number").isNumeric().run(req);
  await param("id", "Must be integer").isInt().run(req);
  await param("id", "Must be better than 0").isInt({ min: 1 }).run(req);
};

exports.checkIdNotMatch = async (req, res, next) => {
  await param("id")
    .custom(async (value) => {
      const productFind = await ProductsModel.findOne({ id: value });

      if (!productFind) return Promise.reject("not match");

      //   await saveUserInRequest(req, productFind);
      //   await saveProductInRequest(req, productFind);
    })
    .run(req);
};
