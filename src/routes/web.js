const express = require('express')
const router = express.Router()
const {getHomepage, content, nihon} = require('../control/homeController')

router.get('/', getHomepage)
router.get('/image', content)
router.get('/aaa', nihon)
module.exports = router