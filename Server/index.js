const dotnet = require('dotenv')
const connectToDB = require('./ConnectMongoose')
const express = require('express')
const cors = require('cors')
const cloudinary = require('cloudinary')
const postRoutes = require('./routes/postRoutes')
const dalleRoutes = require('./routes/dalleRoutes')
dotnet.config()
connectToDB()
const port = 5000
const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}))

app.get('/', async(req, res)=>{
    res.send("Server Responded")
})


// getting all the provided routes
app.use('/api/v1',postRoutes)
app.use('/api/v1',dalleRoutes)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })