// import * as dotenv from 'dotenv' 
// import {cld as cloudinary} from 'cloudinary'
// import { Configuration,  OpenAIApi} from 'openai'
const dotenv = require('dotenv')
const cloudinary = require('cloudinary')
const Post = require('../models/post')
const { Configuration,  OpenAIApi} = require('openai')
const OPEN_AI_KEY = "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"
dotenv.config()


const configuration = new Configuration({
    apiKey: OPEN_AI_KEY
})
const openai = new OpenAIApi(configuration)

const dalle = async(req,res)=>{
    res.send("Hello Daller COntroller.js")
}
const addDalleController = async(req, res)=>{
    try {
        const {prompt} = req.body;
        const apiResponse = await openai.createImage({
            prompt,
            n:1,
            size:'1024x1024',
            response_format:'b64_json',

        })
        const image = apiResponse.data.data[0].b64_json;
        res.status(200).json({pic: image})
    } catch (error) {
        console.log(error)
        res.status(500).json(error?.response.data.error.message)
    }
}

// Adding Products by POST request: 'api/addproducts
// const addProducts = async(req,res,next)=>{
//     try {
//       req.body.user = req.newUser.id
//         const prod = await Products.create(req.body);
    
//         await prod.save();
    
//         res.status(200).json({ success: true, product: prod });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json("Internal Server error occured");
//       }
// }


module.exports = {dalle,addDalleController}