const express = require('express')
const router = express.Router()
const usersRouter = require('./user')
const authRouter = require('./auth')
const authMiddleware = require('../middlewares/authorization')

router.use('/auth', authRouter)

router.use(authMiddleware)
router.use('/users', usersRouter)

module.exports = router
