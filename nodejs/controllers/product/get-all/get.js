const { ProductsModel } = require("../../../models/Products/products");
const { resetRequest } = require("../../../utils/reset-request");

exports.getAll = async (req, res) => {
  // skip là bỏ qua bnhiu item
  // linmit là lấy bnhiu item
  var { limit, page } = req.query;
  console.log(
    "🚀 ~ file: get.js ~ line 7 ~ exports.getAll= ~ limit, page",
    limit,
    page
  );
  var page = page ? page : 1;

  const productsDB = await ProductsModel.find({})
    .skip(limit * (page - 1))
    .limit(limit);

  res.status(200).json({
    message: "ok",
    products: productsDB,
  });

  resetRequest(req);

  // skip là bỏ qua bnhiu item
  // linmit là lấy bnhiu item
  // var { id } = req.params;
};
