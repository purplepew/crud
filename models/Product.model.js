const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        quantity:{
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            require: true,
        }
    }
)

const product = mongoose.model("Produkto", productSchema);

module.exports = product;