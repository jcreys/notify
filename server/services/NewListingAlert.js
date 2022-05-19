const { models: { Subscription, User, Listing }} = require('../db')
const { sendMessage } = require('./twilio')

// NOTE: minPrice, maxPrice are the lower and upper price limits from the new listings data
const sendNewListingAlert = async (minPrice, maxPrice) => {
   const subscriptions = await getSubscriptions(minPrice, maxPrice)
    subscriptions.forEach(async (s) => {
        const listings = await getListings(s.user.lastListingAt, s.minPrice, s.maxPrice)
        if (listings.length > 0) {
            sendNotification(s.user.phoneNumber, listings)
            s.user.update({ lastListingAt: Date.now() })
        }
    })
}

const getSubscriptions = async (minPrice, maxPrice) => {
    // find subscriptions >= minPrice or <= maxPrice 
    return await Subscription.findAll({
        include: User,
        where: {
            [Op.and]: [
                {
                    minPrice: { 
                        [Op.gte]: minPrice
                    }
                },
                {
                    maxPrice: {
                        [Op.lte]: maxPrice
                    }
                }
            ]        
        }
    })
}

const getListings = async (lastListingAt, minPrice, maxPrice) => {
    const queryObject = { where: {
         minPrice: { [Op.gte]: minPrice },
         maxPrice: { [Op.lte]: maxPrice },
        } 
    };

    if (lastListingAt) {
        where.created =  { [Op.gt]: lastListingAt }
    }

    return await Listing.findAll(queryObject)
}

const sendNotification = (phoneNumber, listings) => {
    sendMessage(phoneNumber, `There are ${listings.length} new listings`)
}

module.exports = {
    sendNewListingAlert
}
