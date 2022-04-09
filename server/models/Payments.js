const mongoose = require("mongoose");


const paymentsSchema = new mongoose.Schema(
    {
        cardNumber:{
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        payDate:{
            type: String,
            trim: true,
            maxlength: 32,
            unique: true
        },
        cvv:{
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        amount:{
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentsSchema);