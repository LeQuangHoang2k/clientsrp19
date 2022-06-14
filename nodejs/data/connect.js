const mongoose = require("mongoose");

mongoose.connect(
  // process.env.MONGODB_URI ||
  // "mongodb://localhost:27017/appchatver5",
  // "mongodb+srv://AstmCrim:Ok0901835614hh@cluster0.iw9xv.mongodb.net/cluster1?retryWrites=true&w=majority",
  // "mongodb+srv://AstmCrim:Ok0901835614hh@cluster0.fopis.mongodb.net/cluster0?retryWrites=true&w=majority",
  //   "mongodb+srv://AstmCrim:Ok0901835614hh@cluster0.fopis.mongodb.net/cluster0?retryWrites=true&w=majority",
  //   "mongodb+srv://root:admin@cluster0.ebbq1.mongodb.net/test",
  // `mongodb+srv://AstmCrim:admin@cluster0.iw9xv.mongodb.net/test`,
  // `mongodb+srv://root:admin@cluster0.ebbq1.mongodb.net/firstdb`,
  // `mongodb+srv://root:admin@cluster0.dovox.mongodb.net/firstdb?retryWrites=true&w=majority`,
  // `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.dovox.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
  // `mongodb+srv://root:admin@cluster0.hpke1.mongodb.net/firstdb`,
  `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.hpke1.mongodb.net/${process.env.DB}`,

  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connect mongoose success")
);
