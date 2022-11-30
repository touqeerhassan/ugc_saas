const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    cover: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
});

const brand = mongoose.model("brand", brandSchema);
module.exports = brand;
