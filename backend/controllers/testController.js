const getTest = (req, res) => {
    try {
        res.status(200).json({message: 'Annyeong'})
    } catch (error) {
        res.status(500).message(error)
    }
    // res.status(200).json({message:"Get all posts"});
}

module.exports = {
    getTest
}