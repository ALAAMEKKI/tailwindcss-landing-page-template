const express = require("express");
const router = express.Router();
const User = require("../model/user.model");

/*
const coinbase = require('coinbase-commerce-node');
const Client = coinbase.Client;
Client.init('2534c9ad-67b7-469b-b08c-2d96704b1087');
const Checkout = coinbase.resources.Checkout;
const Charge = coinbase.resources.Charge;
const Event = coinbase.resources.Event;


Checkout.retrieve('a1a069ad-ceba-4e95-9e80-890938280ab2', function (error, response) {
  console.log(error);
  console.log('thischkout' ,response);
});


Charge.retrieve("617ee66a-b6a1-4a2b-9041-5169100a7612", function (error, response) {
  console.log(error);
  console.log("charge",response);
});

*/

const cors = require("cors")({ origin: "*" });

const { Client, resources } = require("coinbase-commerce-node");
const coinbaseSecret = "2534c9ad-67b7-469b-b08c-2d96704b1087";
const sharedSecret = "6f75edd5-a5e5-475b-bd66-f9e64942021b";
const Webhook = require("coinbase-commerce-node").Webhook;

Client.init(coinbaseSecret);

const { Charge } = resources;

router.get("/pay", (req, res) => {
  cors(req, res, async () => {
    // TODO get real product data from database

    const chargeData = {
      name: "Widget",
      description: "Useless widget created by Fireship",
      local_price: {
        amount: 9.99,
        currency: "USD",
      },
      pricing_type: "fixed_price",
      metadata: {
        user: "jeffd23",
      },
    };

    const charge = await Charge.create(chargeData);
    console.log("thischargeee", charge);

    res.send(charge);
  });
});


router.post("/v" , (req,res)=> {
 const rawBody = req.rawBody;
  const signature = req.headers['x-cc-webhook-signature'];

  try {
    const event = Webhook.verifyEventBody(rawBody, signature, sharedSecret);
    consile.log(event)

    if (event.type === 'charge:pending') {
      // TODO
      // user paid, but transaction not confirm on blockchain yet
      console.log('charge:pending');
    }

    if (event.type === 'charge:confirmed') {
      // TODO
      // all good, charge confirmed
      console.log('charge:pending');
    }

    if (event.type === 'charge:failed') {
      // TODO
      // charge failed or expired
      console.log('charge:pending');
    }

    res.send(`success ${event.id}`);
  } catch (error) {
    console.log(error);
    res.status(400).send('failure!');
  }
});
















router.get("/user", (req, res) => {
  res.json({
    msg: "hello",
  });
});

router.post("/auth/login", async (req, res) => {
  let { email, password } = req.body;
  const user = await User.findUser(email, password);
  if (user) {
    req.session.user = user._id;
    res.json({
      message: "you are logged in",
      auth: true,
    });
  } else {
    res.json({
      message: "unable to login",
      auth: false,
    });
  }
});

router.post("/auth/signup", (req, res) => {
  const user = new User(req.body);
  req.session.user = user._id;
  user
    .save()
    .then((result) => {
      res.json({
        message: "user signed up",
        auth: true,
      });
    })
    .catch((err) => {
      res.json({
        message: "unable to signup",
        auth: false,
      });
    });
});

router.get("/auth/verify", (req, res) => {
  if (req.session.user) {
    res.json({
      auth: true,
      message: "you are logged in",
    });
  } else {
    res.json({
      auth: false,
      message: "youu are not logged in",
    });
  }
});

router.get("/auth/logout", (req, res) => {
  req.session.destroy();
  res.json({
    auth: false,
    message: "you are logged out!",
  });
});

module.exports = router;
