require("dotenv").config();
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let userRouter = require("./api/users/user.router");
let itemRouter = require("./api/barang/barang.router");
let transaksiRouter = require("./api/transaksi/transaksi.router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/items", itemRouter);
app.use("/api/transaksis", transaksiRouter);



app.get('/', (req, res) => {
  res.render('login.ejs');
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.get('/home', (req, res) => {
  if ("/api/users/login") {
    res.render('home.ejs');
  } else {
    res.end('Silahkan login dahulu!');
  }
});

app.get('/logout', function (req, res) {
  if ("/api/users/login") {
    "/api/users/login" == false;
    res.redirect('/');
  }
  res.end();
});

app.listen(process.env.APP_PORT, () => {
  console.error("running on port " + process.env.APP_PORT);
});
