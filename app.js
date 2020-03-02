require("dotenv").config();
let express = require("express");
let app = express();
let userRouter = require("./api/users/user.router");
let itemRouter = require("./api/barang/barang.router");
let transaksiRouter = require("./api/transaksi/transaksi.router");

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/items", itemRouter);
app.use("/api/transaksis", transaksiRouter);

app.listen(process.env.APP_PORT, () => {
  console.error("running on port " + process.env.APP_PORT);
});
