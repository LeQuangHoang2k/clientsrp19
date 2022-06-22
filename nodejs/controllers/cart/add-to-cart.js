const { resetRequest } = require("../../utils/reset-request");

exports.addToCart = async (req, res) => {
  var newAccessToken = req.accessToken ? req.accessToken : undefined;

  const fakeCart = [
    {
      _id: "62b014e2a4fd7db9b18c0d57",
      name: "iphone 12 pro max #1",
      price: 20000000,
      image: "http://abc.com",
      quantity: 10,
      tax: 10,
      description: "Đây là sản phẩm chất lượng cao và lâu đời",
    },
    {
      _id: "62b01587a4fd7db9b18c0d58",
      name: "iphone 12 pro max #2",
      price: 20000000,
      image: "http://abc.com",
      quantity: 1000,
      tax: 10,
      description: "Đây là sản phẩm chất lượng cao và lâu đời",
    },
  ];

  res.json({
    message: "123",
    accessToken: newAccessToken,
  });

  resetRequest(req);
};
