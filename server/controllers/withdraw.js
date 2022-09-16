// const { subDays, subHours, subMinutes } = require("date-fns");
const mongoose = require("mongoose");
const User = require("../models/User");
const Withdraw = require("../models/Withdraw");

const withdrawFunds = async (req, res) => {
  let { amount, currency } = req.body;
  if (!currency) {
    currency = "USD";
  }
  try {
    const creator = await User.findOne({ userId: req.params.creatorId });
    if (!creator) {
      return res.status(400).json("User Not Found");
    }
    if (creator.funds.amount < amount) {
      return res.status(400).json("Insufficient Funds");
    }
    creator.funds.amount -= amount;
    await creator.save();
    const newWithdrawal = new Withdraw({
      userId: req.params.creatorId,
      amount,
      currency,
    });
    console.log(await newWithdrawal.save());
    console.log("Funds withdrawn");
    res.status(200).json("Funds Withdrawn");
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getAllWithdrawRequests = async (req, res) => {
  console.log("Here");
  try {
    const requests = await Withdraw.find({});
    res.status(200).json(requests);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getWithdrawRequestsByUser = async (req, res) => {
  try {
    const requests = await Withdraw.find({ userId: req.params.creatorId });
    res.status(200).json(requests);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getWithdrawRequestById = async (req, res) => {
  try {
    const request = await Withdraw.find({ _id: req.params.withdrawalId });
    res.status(200).json(request);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  withdrawFunds,
  getAllWithdrawRequests,
  getWithdrawRequestsByUser,
  getWithdrawRequestById,
};
