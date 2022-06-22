const { param } = require("express-validator");
const { ProductsModel } = require("../../../models/Products/products");
const { verifyInfor } = require("../../verifyInfor");

exports.checkProductId = async (req, res, next) => {
  await param("id", "Undefined or null").exists({ checkFalsy: true }).run(req);

  await param("id", "Length must be 24")
    .isLength({ min: 24, max: 24 })
    .run(req);

  await param("id", "Invalid format")
    .matches(/[a-z0-9]/)
    .run(req);
};

exports.checkProductIdNotMatch = async (req, res, next) => {
  await param("id")
    .custom(async (value) => {
      const productFind = await ProductsModel.findOne({ _id: value });

      if (!productFind) return Promise.reject("not match");

      await saveProductInRequest(req, productFind);
    })
    .run(req);
};

const saveProductInRequest = async (req, data) => {
  req.custom = { ...req.custom, productDB: data };
};
