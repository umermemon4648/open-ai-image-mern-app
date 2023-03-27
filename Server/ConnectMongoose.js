const mongoose = require('mongoose')
dbName='E-Commerce' 
const mongoUrl = `mongodb://localhost:27017/${dbName}`

const connectToDB = () =>{
    mongoose.connect(mongoUrl, ()=>{
        console.log("COnnected to Mongoose successfully")
    })
}
module.exports = connectToDB