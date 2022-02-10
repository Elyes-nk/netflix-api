require("dotenv").config();
const User = require("../models/User");
const Transaction = require("../models/Transaction");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.stripewebhook = (req, res) => {
  let data;
  let eventType;
  const webhookSecret = process.env.WEBHOOK_SECRET_KEY;

  if (webhookSecret) {
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    data = req.body.data;
    eventType = req.body.type;
  }
  console.log(eventType);
  switch (eventType) {
    case "payment_intent.created":
      new Transaction({
          user: data.object.userId,
          subscribtion: data.object.metadata.subscribtionId,
          date: Date.now,
          status: "Pending"
        }).catch((err) => {console.log(err);})
    break;
    case "payment_intent.succeeded":
        User.findByIdAndUpdate(data.object.userId,
          {
            subscribtion: data.object.metadata.subscribtionId,
            subscribtionDate: Date.now, 
            subscribtionMounths: data.object.metadata.subscribtionMounths
          }).catch((err) => {console.log(err);})
        new Transaction({
            user: data.object.userId,
            subscribtion: data.object.metadata.subscribtionId,
            date: Date.now,
            status: "Approved"
          }).catch((err) => {console.log(err);})
    break;
    case "payment_intent.payment_failed":
      new Transaction({
          user: data.object.userId,
          subscribtion: data.object.metadata.subscribtionId,
          date: Date.now,
          status: "Declined"
        }).catch((err) => {console.log(err);})
    break;
    default:
  }
  res.sendStatus(200);
};