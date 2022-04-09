const {Router} = require("express");
const router = Router();

const paymentsController = require("../controllers/paymentsController")

router.post('/', paymentsController.create)

module.exports = router;