exports.addToCart = async (req, res) => {
  var newAccessToken = req.accessToken ? req.accessToken : undefined;

  res.json({
    message: "123",
    accessToken: newAccessToken,
  });
};
