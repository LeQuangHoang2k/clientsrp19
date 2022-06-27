const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId },
    receiver_name: { type: String },
    receiver_city: { type: String },
    receiver_district: { type: String },
    //   category_id: { type: Int32Array },
    receiver_ward: { type: String },
    receiver_address: { type: String },
    // state_id: { type: Number },
  },
  { timestamps: true }
);

exports.OrdersModel = mongoose.model("orders", OrdersSchema);
// "name":"iphone 12 pro max",
// "price":20000000,
// "image":"http://abc.com",
// "quantity":1000,
// "tax":10,
// "description":"Đây là sản phẩm chất lượng cao và lâu đời"
