const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campaignSchema = new mongoose.Schema({
  first: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    country: {
      type: String,
      required: true,
    },
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
  },
  profile: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
  },
  social: {
    instagram: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    youtube: { type: String },
    amazon: { type: String },
    website: { type: String },
  },
  categories: {
    primary: { type: String, required: true },
    secondary: { type: String },
    tertiary: { type: String },
  },
  brandSelfie: {
    type: String,
    required: true,
  },
  productDemo: {
    type: String,
    // required: true,
  },
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  isActive:{
    type: Boolean
  }
});

const campaign = mongoose.model("creator", campaignSchema);
module.exports = campaign;
