const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = require("./router/user.route");
const rawBody = require ("./router/user.route")
const cors = require ("cors")


app.use(cors())


app.use(
  session({
    secret: "ka3boura",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);




app.use(rawBody);
app.use("/", router);

module.exports = app;
