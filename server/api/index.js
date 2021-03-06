const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/listings', require('./listings'))
router.use('/subscriptions', require('./subscriptions'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
