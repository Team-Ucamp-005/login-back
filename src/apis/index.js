const express = require('express')
const router = express.Router()
const usersRouter = require('./user')
const authRouter = require('./auth')

router.use('/auth', authRouter)
router.use('/users', usersRouter)

module.exports = router
