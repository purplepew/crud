const Product = require('../models/Product.model')

const getAllProducts = async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getOneProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(product==null) res.status(200).json({message: "Product not found."})
        else res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createProduct = async (req,res)=>{
    try {
        const name = req.body.name;
        const quantity = req.body.quantity;
        const price = req.body.price;

        const product = await Product.create({name, quantity, price})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        const updatedProduct = await Product.findById(id)
        res.status(200).json({previous: product, new: updatedProduct})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json({product, message: "Data above is Deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllProducts,
    getOneProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct
}
