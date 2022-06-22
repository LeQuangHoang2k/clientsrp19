const { ProductsModel } = require("../../../models/Products/products");
const { resetRequest } = require("../../../utils/reset-request");

exports.getDetail = async (req, res) => {
  const product = req.custom.productDB;
  req.custom.productDB = undefined;

  res.status(200).json({
    message: "ok",
    product: product,
  });

  resetRequest(req);
};
