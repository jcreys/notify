//this is the access point for all things database related!

const db = require('./db')
const Subscription = require('./models/Subscription')
const SubscriptionListing = require('./models/SubscriptionListing')
const User = require('./models/User')
const Listing = require('./models/Listing')

//associations could go here!
Subscription.belongsTo(User);
User.hasMany(Subscription);
SubscriptionListing.belongsTo(Subscription);
Subscription.hasMany(SubscriptionListing);
SubscriptionListing.belongsTo(Listing);
Listing.hasMany(SubscriptionListing);


module.exports = {
  db,
  models: {
    User,
    Listing,
    Subscription
  },
}
