require("dotenv").config();
let express = require("express");
let app = express();
let userRouter = require("./api/users/user.router");
let itemRouter = require("./api/barang/barang.router")

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/items", itemRouter);

app.listen(process.env.APP_PORT, () => {
  console.error("running on port " + process.env.APP_PORT);
});
