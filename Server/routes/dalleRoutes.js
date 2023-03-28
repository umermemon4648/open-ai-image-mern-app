const express = require('express')
const router = express.Router()
const {dalle, addDalleController} = require('../controller/dalleController')
router.post('/dalle',addDalleController)

module.exports = router