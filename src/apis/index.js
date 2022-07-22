const express = require('express')
const router = express.Router()
const usersRouter = require('./user')
const authRouter = require('./auth')
const registerRouter = require('./register')
const authMiddleware = require('../middlewares/authorization')

router.use('/auth', authRouter)
router.use('/register', registerRouter)
router.use(authMiddleware)

router.use('/users', usersRouter)
module.exports = router
