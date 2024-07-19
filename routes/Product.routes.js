const express = require('express')
const Route = express.Router()
const {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controller/Product.controller')


Route
.get('/', getAllProducts)
.get('/:id', getOneProduct)
.post('/', createProduct)
.put('/:id', updateProduct)
.delete('/:id', deleteProduct)


module.exports = Route;