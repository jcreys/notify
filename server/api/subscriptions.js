const router = require('express').Router();
const { models: { Subscription, User }} = require('../db')
const Sequelize = require('sequelize')
module.exports = router

router.post("/", async (req, res, next) => {
    try {
        const user = await User.findByToken(req.headers.authorization)
        const subscription = await Subscription.create({ ...req.body, userId: user.id })
        res.json(subscription)
    } catch (ex) {
      next(ex);
    }
  });
