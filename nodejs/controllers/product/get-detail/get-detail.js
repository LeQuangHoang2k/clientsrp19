const { ProductsModel } = require("../../../models/Products/products");

exports.getDetail = async (req, res) => {
  const product = req.productDB;
  req.productDB = undefined;

  res.status(200).json({
    message: "ok",
    product: product,
  });
};
