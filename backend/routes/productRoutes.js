import express from "express";
import asyncHandler from "express-async-handler";
import Product from '../models/productModel.js';

const router = express.Router()

// @des Fetch all products
// @route Get api/products
// @access Public this everobody can accesse (some route will need token)

router.get('/', asyncHandler(async (req,res) => {
  const products = await Product.find({})
  res.json(products)
}))

// @des Fetch single product
// @route Get api/product/:id 
// @access Public this everobody can accesse (some route will need token)

router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404).json({message: 'Product not found'})
  }
}))

export default router