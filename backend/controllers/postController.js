const Product = require("../models/Product")
// @desc Get ALL Posts
// @route GET /api/
// @access public

const getPosts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).message(error)
    }
    // res.status(200).json({message:"Get all posts"});
}
// @desc Get SPECIFIC Post
// @route GET /api/:id
// @access public

const getPost = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).message(error)
    }
}
// @desc Create Post
// @route POST /api/
// @access public

const createPost = async (req, res) => {
    try {
        const {name, description, price, stock, category} = req.body;
        if(!name|| !description || !price || !stock || !category){
            res.status(400); 
            throw new Error("All fields are required!");
        }
        const product = await Product.create({
            name, description, price, stock, category
        })
        res.status(201).json(product);
    } catch (error) {
        
    }
}

// @desc Edit Post
// @route PUT /api/:id
// @access public

const editPost = async (req, res) => {
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

const destroyPost = async (req, res) => {
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
    getPosts,
    getPost,
    createPost,
    editPost,
    destroyPost
}