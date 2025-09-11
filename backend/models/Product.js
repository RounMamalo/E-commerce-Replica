const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    description: {
        type: String,
        required: [true, "Please add a description"]
    },
    category: {
        type: String,
        required: [true, "Please add a category"]
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    sellerId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Product', productSchema)