const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const url = "mongodb+srv://sanchezjhones45:MsuC4yUJHLbdWJKg@clusetername-jhones.l5knkjo.mongodb.net/?retryWrites=true&w=majority&appName=cluseterName-jhones"
const bodyParser = require('body-parser')
const Product = require('./models/Product.model')
const productRoutes = require('./routes/Product.routes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.url)
    next();
})

app.use('/api/products', productRoutes);

mongoose.connect(url)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.log(err))

app.listen(3000, () => console.log("JUST NOW: SERVERE RUNNING!"))