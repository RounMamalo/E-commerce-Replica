const express = require("express")
const router = express.Router();
const { getProductSellerId } = require('../controllers/productController')

router.route("/:id").get(getProductSellerId);

module.exports = router;