const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// @desc Show All User
// @route GET /auth
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        
    }
}

// @desc Register User
// @route POST /auth

const registerUser = async (req, res) => {
    try {
        const {email, firstName, lastName, password, role, userName} = req.body;

        if (!email || !firstName || !lastName || !password || !userName) {
            res.status(400); 
            throw new Error("All fields are required!");
        }

        const user = await User.create({
            firstName, email, lastName, password, userName, role
        })
        res.status(201).json(user);
    } catch (error) {
        
    }
}

// @desc Login User
// @route POST /auth

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email });
        if(!user){
            res.status(400).json({ message: 'User Does Not Exist!'})
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            res.status(400).json({ message: 'Invalid Password!'})
        }

        const token = jwt.sign({ id: user._id, userName: user.userName, email: user.email}, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', user: user.userName, token })
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    getUsers,
    loginUser,
    registerUser
}
