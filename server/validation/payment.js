const { body } = require('express-validator');

exports.paymentValidators = [
    body('cardNumber')
        .isNumeric()
        .isLength({ min: 16, max:16 })
        .withMessage('только цифры, длина значения 16'),
    body('payDate')
        .isNumeric()
        .withMessage(''),
    body('cvv')
        .isNumeric()
        .isLength({ min: 3, max:3 })
        .withMessage(''),
    body('amount')
        .isNumeric()
        .withMessage(''),
]

