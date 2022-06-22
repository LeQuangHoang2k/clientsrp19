exports.resetRequest = (req) => {
  delete req.custom;
  console.log(
    "🚀 ~ file: app.js ~ line 23 ~ resetRequest ~ req.custom",
    req.custom
  );
};
