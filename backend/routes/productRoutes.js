const express = require("express");
const router = express.Router();
const { getProducts, getProduct, createProduct, editProduct, destroyProduct } = require('../controllers/productController')

//Posts API 
router.route("/").get(getProducts);
router.route("/:id").get(getProduct);
router.route("/").post(createProduct);
router.route("/:id").put(editProduct);
router.route("/:id").delete(destroyProduct);


module.exports = router;