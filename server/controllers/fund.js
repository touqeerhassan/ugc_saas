const User = require("../models/User");
const stripe = require("../config/stripeConfig");

const CC = require("currency-converter-lt");

const createPaymentIntent = async (req, res) => {
  const { amount, currency, type } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      payment_method_types: [type],
      description: "Add Funds",
    });
    console.log(paymentIntent.client_secret);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
};

const addFunds = async (req, res) => {
  const { currency, amount, userId } = req.body;
  try {
    const customer = await User.findOne({ userId });
    if (customer) {
      console.log(customer);
      let currencyConverter = new CC({
        from: currency.toUpperCase(),
        to: customer.funds.currency.toUpperCase(),
        amount: parseInt(amount),
      });
      // console.log(currencyConverter);
      currencyConverter.convert().then(async (response) => {
        console.log(response); //or do something else
        console.log(customer.funds.amount);
        customer.funds.amount += response;

        customer.save(function (err) {
          if (!err) {
            console.log(customer);
            res.status(200).send("Funds Updated");
          } else {
            console.log("Could not save");
            res.status(500).send({ error: "Could not update Funds" });
          }
        });
      });
    } else {
      res.status(404).json("User not Found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};

// const buyProduct = async (req, res) => {
//   // console.log(req.body);
//   const { currency, amount, userId } = req.body;
//   try {
//     const customer = await StripeCustomer.findOne({ userId });
//     // console.log(customer);
//     // console.log(currency);
//     if (customer) {
//       console.log(customer);
//       let currencyConverter = new CC({
//         from: currency.toUpperCase(),
//         to: customer.funds.currency.toUpperCase(),
//         amount: parseInt(amount),
//       });
//       // console.log(currencyConverter);
//       currencyConverter.convert().then((response) => {
//         console.log(response); //or do something else
//         console.log(customer.funds.amount);

//         if (response > customer.funds.amount) {
//           res.status(500).send("Insufficient Balance");
//         } else {
//           customer.funds.amount -= response;
//           customer.save(function (err) {
//             if (!err) {
//               console.log(customer);
//               res.status(200).send(customer.funds);
//             } else {
//               console.log("Could not save");
//               res.status(500).send({ error: "Could not purchase Product" });
//             }
//           });
//         }
//       });
//     } else {
//       res.status(404).json("User not Found");
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ error: err.message });
//   }
// };

module.exports = {
  createPaymentIntent,
  addFunds,
  //   buyProduct,
};
