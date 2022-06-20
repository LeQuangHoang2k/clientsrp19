const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  price: { type: mongoose.Schema.Types.Decimal128 },
  image: { type: String },
  //   category_id: { type: Int32Array },
  quantity: { type: Number },
  tax: { type: Number },
  description: { type: String },
});

exports.ProductsModel = mongoose.model("products", ProductsSchema);
// "name":"iphone 12 pro max",
// "price":20000000,
// "image":"http://abc.com",
// "quantity":1000,
// "tax":10,
// "description":"Đây là sản phẩm chất lượng cao và lâu đời"
