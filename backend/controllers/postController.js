// @desc Get ALL Posts
// @route GET /api/
// @access public

const getPosts = (req, res) => {
    try {
        
    } catch (error) {
        
    }
    // res.status(200).json({message:"Get all posts"});
}
// @desc Get SPECIFIC Post
// @route GET /api/:id
// @access public

const getPost = (req, res) => {
    res.status(200).json({message:`This is post ${req.params.id}`});
}
// @desc Create Post
// @route POST /api/
// @access public

const createPost = (req, res) => {
    const {name, description, price, stock, category} = req.body;
    if(!name|| !description || !price || !stock || !category){
        res.status(400); 
        throw new Error("All fields are required!");
    }
    res.status(201).json({message:"Get all posts"})        
}

// @desc Edit Post
// @route PUT /api/:id
// @access public

const editPost = (req, res) => {
    res.status(201).json({message:`Edit post ${req.params.id}`});
};
// @desc Delete Post
// @route DELETE /api/:id
// @access public

const destroyPost = ((req, res) => {
    res.status(201).json({message:`Delete post ${req.params.id}`});
})


module.exports = {
    getPosts,
    getPost,
    createPost,
    editPost,
    destroyPost
}