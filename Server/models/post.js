const mongoose = require('mongoose');
const { Schema } = mongoose;
const PostSchema =  new Schema({
    
    name:
    {type: String, required: true, trim: true},
    
    prompt:
    {type: String, required: true},
    
    photo:
    {type: String, required: true},
})

module.exports = mongoose.model('Post', PostSchema)