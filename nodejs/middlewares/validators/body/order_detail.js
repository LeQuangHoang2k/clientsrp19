const { body, validationResult, check } = require("express-validator");

const { UsersModel } = require("../../../models/Users/users");

exports.checkOrderDetail = async (req, res, next) => {
  // await checkOrderId(req);

  await checkOrderDetail(req);

  await checkProductId(req);

  await checkPrice(req);

  await checkQuantity(req);

  await checkTax(req);
};

// const checkOrderId = async (req) => {
//   await body("order_id", "Undefined or null")
//     .exists({ checkFalsy: true })
//     .run(req);

//   await body("order_id", "Length must be 24")
//     .isLength({ min: 24, max: 24 })
//     .run(req);

//   await body("order_id", "Invalid format")
//     .matches(/[a-z0-9]/)
//     .run(req);
// };

const checkOrderDetail = async (req) => {
  await check("order_detail", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);
};

const checkProductId = async (req) => {
  await body("order_detail.*.product_id", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("order_detail.*.product_id", "Length must be 24")
    .isLength({ min: 24, max: 24 })
    .run(req);

  await body("order_detail.*.product_id", "Invalid format")
    .matches(/[a-z0-9]/)
    .run(req);
};

const checkPrice = async (req) => {
  await body("order_detail.*.price", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("order_detail.*.price", "Invalid format")
    .matches(/^[0-9]+$/)
    .run(req);

  await body("order_detail.*.price", "Not a number").isNumeric().run(req);
  await body("order_detail.*.price", "Must be decimal").isDecimal().run(req);
  await body("order_detail.*.price", "Must be better than 0")
    .isInt({ min: 1 })
    .run(req);
};

const checkQuantity = async (req) => {
  await body("order_detail.*.quantity", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("order_detail.*.quantity", "Invalid format")
    .matches(/^[0-9]+$/)
    .run(req);

  await body("order_detail.*.quantity", "Not a number").isNumeric().run(req);
  await body("order_detail.*.quantity", "Must be integer").isInt().run(req);
  await body("order_detail.*.quantity", "Must be better than 0")
    .isInt({ min: 1 })
    .run(req);
};

const checkTax = async (req) => {
  await body("order_detail.*.tax", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("order_detail.*.tax", "Invalid format")
    .matches(/^[0-9]+$/)
    .run(req);

  await body("order_detail.*.tax", "Not a number").isNumeric().run(req);
  await body("order_detail.*.tax", "Must be decimal").isDecimal().run(req);
  await body("order_detail.*.tax", "Must be better than 0")
    .isInt({ min: 1 })
    .run(req);
};
