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
    state: { type: Number },
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


// const mongoose = require("mongoose");

// const CartsSchema = new mongoose.Schema(
//   {
//     user_id: { type: mongoose.Schema.Types.ObjectId },
//     cart: [
//       {
//         name: {
//           type: String,
//           // required: [true, "Name is not exist"],
//           validate: (value) => {
//             console.log("🚀 ~ file: carts.js ~ line 12 ~ value", value);
//             if (!value) {
//               return Promise.reject(new Error("Oops!"));
//             }
//           },
//         },
//         price: { type: mongoose.Schema.Types.Decimal128 },
//         image: { type: String },
//         quantity: { type: Number },
//         tax: { type: Number },
//         description: { type: String },
//       },
//     ],
//     state: { type: Number },
//   },
//   { timestamps: true }
// );

// exports.CartsModel = mongoose.model("carts", CartsSchema);
// "name":"iphone 12 pro max",
// "price":20000000,
// "image":"http://abc.com",
// "quantity":1000,
// "tax":10,
// "description":"Đây là sản phẩm chất lượng cao và lâu đời"
