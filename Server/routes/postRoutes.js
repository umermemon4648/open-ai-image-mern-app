const express = require('express')
const router = express.Router()
const {getAllPosts, createPosts} = require('../controller/postController')

router.post('/new-post',createPosts)
router.get('/get-allpost',getAllPosts)

module.exports = router