const express = require("express");
const router = express.Router();
const { getProducts, getProduct, createProduct, editProduct, destroyProduct } = require('../controllers/productController')
//Posts API 
router.route("/").get(getProducts);
router.route("/:id").get(getProduct);
router.route("/").post(createProduct);
router.route("/:id").put(editProduct);
router.route("/:id").delete(destroyProduct);

// Should Create a different route for different functionality
// router.route("/profile/:id").get((req, res) => {
//     res.status(200).json({message:`Get profile information ${req.params.id}`});
// });

// router.route("/messages").get((req, res) => {
//     res.status(200).json({message:"Get all messages"});
// });

// router.route("/friends").get((req, res) => {
//     res.status(200).json({message:"Get all friends"});
// });

module.exports = router;