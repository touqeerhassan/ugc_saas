const User = require("../models/User");
const PaymentClientSecret = require("../models/PaymentClientSecret");
const stripe = require("../config/stripeConfig");

const CC = require("currency-converter-lt");

const createPaymentIntent = async (req, res) => {
  const { amount, currency, type } = req.body;

  console.log(req.body);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: currency === "idr" ? amount * 1000 : amount * 100,
      currency: currency,
      payment_method_types: [type],
      description: "Add Funds",
    });
    console.log(paymentIntent.client_secret);
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
};

const addFunds = async (req, res) => {
  let { currency, amount, userId } = req.body;
  amount = currency === "idr" ? amount / 1000 : amount / 100;

  try {
    const customer = await User.findOne({ userId });
    if (customer) {
      console.log(customer);
      let currencyConverter = new CC({
        from: currency.toUpperCase(),
        to: customer.funds.currency.toUpperCase(),
        amount: parseFloat(amount),
      });
      // console.log(currencyConverter);
      currencyConverter.convert().then(async (response) => {
        console.log(response); //or do something else
        console.log(customer.funds.amount);
        customer.funds.amount += response;

        customer.save(function (err) {
          console.log(err);
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

const addFundsFPX = async (req, res) => {
  let { clientSecret, userId } = req.body;

  const isDuplicate = await PaymentClientSecret.find({ clientSecret });

  if (isDuplicate.length > 0) {
    return res.status(401).json("Duplicate Request");
  }
  const paymentIntent = await stripe.paymentIntents.retrieve(clientSecret);
  let { amount, currency } = paymentIntent;
  amount = currency === "idr" ? amount / 1000 : amount / 100;

  // console.log(paymentIntent);

  try {
    const isDuplicate = await PaymentClientSecret.find({ clientSecret });
    console.log(isDuplicate);
    if (isDuplicate.length > 0) {
      return res.status(401).json("Duplicate Request");
    }
    const paymentClientSecret = new PaymentClientSecret({
      clientSecret: clientSecret,
    });
    await paymentClientSecret.save();
    const customer = await User.findOne({ userId });
    if (customer) {
      console.log(customer);
      let currencyConverter = new CC({
        from: currency.toUpperCase(),
        to: customer.funds.currency.toUpperCase(),
        amount: parseFloat(amount),
      });
      // console.log(currencyConverter);
      currencyConverter.convert().then(async (response) => {
        console.log(response); //or do something else
        console.log(customer.funds.amount);
        customer.funds.amount += response;

        customer.save(function (err) {
          console.log(err);
          if (!err) {
            console.log(customer);
            res.status(200).json("Funds Updated");
          } else {
            console.log("Could not save");
            res.status(500).json("Could not update Funds");
          }
        });
      });
    } else {
      res.status(404).json("User not Found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

const changeCurrency = async (req, res) => {
  let { selectedCurrency, userId } = req.body;
  console.log(req.body);

  try {
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(404).json("User not Found");
    }
    user.funds.selectedCurrency = selectedCurrency?.toUpperCase();
    user.save((err, result) => {
      console.log(err, result);
      if (err) {
        return res.status(500).json("Could not update currency");
      }
      return res.status(200).json(result);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};


const changeAddress = async (req, res) => {
  let { address, userId } = req.body;
  console.log(req.body);

  try {
    var user = await User.findOne({ userId });
    if (!user) {
      return res.status(404).json("User not Found");
    }
    user.address=address;
    user.updateOne(
      {
        $set: req.body
      },
      err => {
        if (err) res.status(400).json(`Error: ${err}`);
        else res.status(200).send("Updated User Address");
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};

const convertCurrency = async (req, res) => {
  let { from, amount, to } = req.body;

  try {
    let currencyConverter = new CC({
      from: from?.toUpperCase(),
      to: to?.toUpperCase(),
      amount: parseFloat(amount),
    });
    // console.log(currencyConverter);
    currencyConverter.convert().then(async (response) => {
      return res.status(200).json(response);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};

const chooseCreator = async (req, res) => {
  let { brandId, creatorId, amount } = req.body;

  if (!brandId || !creatorId || !amount) {
    return res.status(400).json("Invalid Request");
  }

  try {
    let brand = await User.findOne({ userId: brandId });
    let creator = await User.findOne({ userId: creatorId });
    if (!brand || !creator) {
      return res.status(404).json("User not Found");
    }
    brand.funds.amount -= parseFloat(amount);
    // creator.funds.amount += parseFloat(amount);
    await brand.save();
    // await creator.save();
    return res.status(200).json("Funds Updated");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
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
  addFundsFPX,
  changeCurrency,
  convertCurrency,
  chooseCreator,
  changeAddress
  //   buyProduct,
};
