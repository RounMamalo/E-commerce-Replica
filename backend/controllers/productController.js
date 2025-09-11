const Product = require("../models/Product")
// @desc Get ALL Posts
// @route GET /api/
// @access public

const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('sellerId', 'userName')
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
    // res.status(200).json({message:"Get all posts"});
}
// @desc Get SPECIFIC Post
// @route GET /api/:id
// @access public

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}
// @desc Get SPECIFIC Product using a specific sellerId
// @route GET /api/:id
// @access public

const getProductSellerId = async (req, res) => {
  try {
    const products = await Product.find({ sellerId: req.params.id })
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// @desc Create Post
// @route POST /product/
// @access public

const createProduct = async (req, res) => {
    try {
        const {name, description, price, stock, category, sellerId} = req.body;
        if(!name|| !description || !price || !stock || !category || !sellerId){
            res.status(400); 
            throw new Error("All fields are required!");
        }
        const product = await Product.create({
            name, description, price, stock, category, sellerId
        })
        res.status(201).json(product);
    } catch (error) {
        console.log(error)
    }
}

// @desc Edit Post
// @route PUT /api/:id
// @access public

const editProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(404);
            throw new Error("Contact not found!");
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        res.status(200).json(updatedProduct);
    } catch (error) {
        
    }
};
// @desc Delete Post
// @route DELETE /api/:id
// @access public

const destroyProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(404);
            throw new Error("Contact not found!");
        }
        res.status(200).json({message: `Product: ${product} deleted`})
        await Product.deleteOne({_id: req.params.id})
    } catch (error) {
        
    }
}

module.exports = {
    getProducts,
    getProduct,
    getProductSellerId,
    createProduct,
    editProduct,
    destroyProduct
}