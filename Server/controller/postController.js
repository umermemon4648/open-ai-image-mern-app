const dotenv = require('dotenv')
const cloudinary = require('cloudinary')
const Post = require('../models/post')
dotenv.config()


// cloudinary.config({
//   cloud_name: "doyamw3ju",
//   api_key: "776336471658229",
//   api_secret: "aSkcYBPcQ2HdgcfZsQkiLpCdmgo",
// })

const createPosts = async(req, res)=>{
  try {
    const {name, prompt, pic} = req.body
    const photoUrl = await cloudinary.uploader.upload(pic)
    const newPost = await Post.create({
      name,
      prompt,
      pic: photoUrl.url,
    })
    res.status(201).json({success: true, data: newPost})
  } catch (error) {
    res.status(500).json({success: false, message: error})
  }
}

const getAllPosts = async(req, res)=>{
  try {
    const posts = await Post.find({})
    res.status(201).json({success: true, data: posts})
  } catch (error) {
    res.status(500).json({success: false, message: error})
  }
}

module.exports = {getAllPosts, createPosts}