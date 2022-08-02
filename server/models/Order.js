const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    // 1 : Dine in
    // 2 : Delivery
    // 3 : Pickup
    type: {
        type: Number,
        required: true
    },
    invoiceNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createdOn: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },

    // Dine in specific
    waiter: {
        type: String,
        required: false
    },
    table: {
        type: String,
        required: false
    },

    // Delivery and Pickup specific
    from: {
        type: String,
        required: false
    },


    // These correspond to the user creating the profile
    userId: {
        type: String,
        required: true
    }
})

const order = mongoose.model('order', orderSchema)
module.exports = order