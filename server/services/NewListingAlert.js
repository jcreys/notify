const Sequelize = require('sequelize');
const { models: { Subscription, User, Listing }} = require('../db')
const { sendMessage } = require('./twilio')


// NOTE: minPrice, maxPrice are the lower and upper price limits from the new listings data
const sendNewListingAlert = async (minPrice, maxPrice) => {
   const subscriptions = await getSubscriptions(parseInt(minPrice), parseInt(maxPrice))
   console.log(subscriptions.length, minPrice, maxPrice)
    subscriptions.forEach(async (s) => {
        const listings = await getListings(s.user.lastListingAt, s.minPrice, s.maxPrice)
        if (listings.length > 0) {
            sendNotification(s.user.phoneNumber, s.user.username, listings)
            s.user.update({ lastListingAt: Date.now() })
        }
    })
}

const getSubscriptions = async (minPrice, maxPrice) => {
    return await Subscription.findAll({
        include: User,
        /*where: {
            [Sequelize.Op.or]: [
                {
                    minPrice: { 
                        [Sequelize.Op.gte]: minPrice
                    }
                },
                {
                    maxPrice: {
                        [Sequelize.Op.lte]: maxPrice
                    }
                }
            ]        
        }*/
    })
}

const getListings = async (lastListingAt, minPrice, maxPrice) => {
    const queryObject = { where: {
        [Sequelize.Op.and]: [
            { price: { [Sequelize.Op.gte]: minPrice } },
            { price: { [Sequelize.Op.lte]: maxPrice } }
        ]
        }         
    };
    
    if (lastListingAt) {
        queryObject.where.created =  { [Sequelize.Op.gt]: lastListingAt }
    }

    return await Listing.findAll(queryObject)
}

const sendNotification = (phoneNumber, username, listings) => {
    // console.log(`There are ${listings.length} new listings for ${username}!`);
    console.log(`There are ${listings.length} new listings for ${username}! \n ${JSON.stringify(listings[0]['id'])}. name: ${JSON.stringify(listings[0]['name'])} link: ${JSON.stringify(listings[0]['link'])} price: $${JSON.stringify(listings[0]['price'])}\n`);
    sendMessage(phoneNumber, `There are ${listings.length} new listings for ${username}! \n ${JSON.stringify(listings[0]['id'])}. name: ${JSON.stringify(listings[0]['name'])} link: ${JSON.stringify(listings[0]['link'])} price: $${JSON.stringify(listings[0]['price'])}\n`)
}


module.exports = {
    sendNewListingAlert
}
