const router = require('express').Router();
const { models: { Listing }} = require('../db')
const Sequelize = require('sequelize');
module.exports = router

router.get("/", async (req, res, next) => {
    try {
        let queryObject = { where: {} };  
        const maxPrice = req.query.maxPrice;
        const minPrice = req.query.minPrice;  

        if (maxPrice || minPrice) {
            const arr = []
            if (minPrice) 
                arr.push({ price: { [Sequelize.Op.gte]: minPrice } })
            if (minPrice) 
                arr.push({ price: { [Sequelize.Op.lte]: maxPrice } }) 
            queryObject.where = { 
                [Sequelize.Op.and]: arr
            }
        }
  
        const listings = await Listing.findAll(queryObject);
        res.send(listings);
    } catch (ex) {
      next(ex);
    }
  });
