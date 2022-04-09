const Payments = require('../models/Payments')
const { validationResult } = require('express-validator');


const create = async (req,res) => {
    const {cardNumber,ExpirationDate,CVV,Amount} = req.body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const payments = await new Payments({
        cardNumber:cardNumber,
        payDate:ExpirationDate,
        cvv:CVV,
        amount:Amount
    })


    // await payments.save()

   return res.send(payments)
}

module.exports = {
    create
}