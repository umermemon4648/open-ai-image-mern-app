const mongoose = require('mongoose')
const connectToDB = () =>{
    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useUnifiedTopology: true

    }).then(()=>{

        console.log("COnnected to Mongoose successfully")
    })
        
//         ()=>{
//         }
}

module.exports = connectToDB