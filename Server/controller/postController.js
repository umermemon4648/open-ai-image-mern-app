import * as dotenv from 'dotenv' 
import {cld as cloudinary} from 'cloudinary'
const Post = require('../models/post')
dotenv.config()


// Adding Products by POST request: 'api/addproducts
const addProducts = async(req,res,next)=>{
    try {
      req.body.user = req.newUser.id
        const prod = await Products.create(req.body);
    
        await prod.save();
    
        res.status(200).json({ success: true, product: prod });
      } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server error occured");
      }
}


module.exports = {addProducts}