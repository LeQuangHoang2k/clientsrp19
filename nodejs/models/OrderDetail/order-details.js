const mongoose = require("mongoose");

const OrderDetailsSchema = new mongoose.Schema(
  {
    order_id: { type: mongoose.Schema.Types.ObjectId },
    order_detail: [
      {
        product_id: { type: mongoose.Schema.Types.ObjectId },
        price: { type: mongoose.Schema.Types.Decimal128 },
        quantity: { type: mongoose.Schema.Types.Number },
        tax: { type: mongoose.Schema.Types.Decimal128 },
        // receiver_ward: { type: String },
        // receiver_address: { type: String },
      },
    ],
  },
  { timestamps: true }
);

exports.OrderDetailsModel = mongoose.model("order_details", OrderDetailsSchema);