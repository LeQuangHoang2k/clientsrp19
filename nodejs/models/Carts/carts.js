const mongoose = require("mongoose");

const CartsSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId },
    cart: [
      {
        name: { type: String },
        price: { type: mongoose.Schema.Types.Decimal128 },
        image: { type: String },
        quantity: { type: Number },
        tax: { type: Number },
        description: { type: String },
      },
    ],
  },
  { timestamps: true }
);

exports.CartsModel = mongoose.model("carts", CartsSchema);
// "name":"iphone 12 pro max",
// "price":20000000,
// "image":"http://abc.com",
// "quantity":1000,
// "tax":10,
// "description":"Đây là sản phẩm chất lượng cao và lâu đời"
