const { ProductsModel } = require("../../../models/Products/products");

exports.getDetail = async (req, res) => {
  // skip là bỏ qua bnhiu item
  // linmit là lấy bnhiu item
  var { id } = req.params;
  console.log("🚀 ~ file: get.js ~ line 7 ~ exports.getAll= ~ limit, page", id);

  const productsDB = await ProductsModel.findOne({ id });

  res.status(200).json({
    message: "ok",
    product: productsDB,
  });
};
