const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Schema.Types.Decimal128 },
  image: { type: String },
//   category_id: { type: Int32Array },
  quantity: { type: Int32Array },
  tax: { type: Float64Array },
  description: { type: String },
});

exports.ProductsModel = mongoose.model("Products", ProductsSchema);
// "name":"iphone 12 pro max",
// "price":20000000,
// "image":"http://abc.com",
// "quantity":1000,
// "tax":10,
// "description":"Đây là sản phẩm chất lượng cao và lâu đời"