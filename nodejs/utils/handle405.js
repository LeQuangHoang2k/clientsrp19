exports.handle405 = (req, res) => {
  res.status(405).json({
    message: "Method not allow",
  });
};
