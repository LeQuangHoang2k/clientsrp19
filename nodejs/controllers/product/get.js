exports.getAll = async (req, res) => {
  const productsDB = await UsersModel.find({});

  res.status(200).json({
    message: "ok",
    products: productsDB,
  });
};
