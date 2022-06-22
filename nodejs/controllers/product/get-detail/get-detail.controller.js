const { ProductsModel } = require("../../../models/Products/products");
const { resetRequest } = require("../../../utils/reset-request");

exports.getDetail = async (req, res) => {
  res.status(200).json({
    message: "ok",
    product: req.custom.productDB,
  });

  resetRequest(req);
};
