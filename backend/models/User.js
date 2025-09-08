const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //Required for hashing password

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true]
    },
    lastName: {
        type: String,
        required: [true]
    },
    userName: {
        type: String,
        required: [true],
        unique: true
    },
    email: {
        type: String,
        required: [true],
        unique: true
    },
    password: {
        type: String,
        required: [true]
    },
    role: {
        type: String,
        required: [true]
    }
})

// Hash password before saving
UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

module.exports = mongoose.model('User', UserSchema)