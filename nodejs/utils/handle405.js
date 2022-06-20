exports.handle405 = (req, res) => {
  //   console.log(req.method);
  //   console.log("🚀 ~ file: handle405.js ~ line 5 ~ res.status ~ req.ip", req.ip);
  res.status(405).json({
    message: "Method not allow",
    alert: `${req.ip} tried to access ${req.originalUrl}`,
  });
};
