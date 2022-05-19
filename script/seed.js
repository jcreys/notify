'use strict'
const {db, models: {User,Listing} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const listings = await Promise.all([
    Listing.create({ 
    link: 'https://sfbay.craigslist.org/sfc/apa/d/san-francisco-beautiful-brand-new-top/7485024037.html',
    created: "2022-05-17 16:33:00",
    lat:37.80005944429272, 
    lon:-122.42855457019328, 
    name:'Beautiful Brand New Top Floor 2-Bedroom with W/D and Sonos Audio (marina / cow hollow)', 
    price: 4095, 
    location: 'marina/cow hollow', 
    cl_id: 7485024037, 
    area: 'sfc',}),

    Listing.create({ 
    link: 'https://sfbay.craigslist.org/sfc/apa/d/san-francisco-sit-back-relax-your-new/7485315392.html',
    created: "2022-05-18 11:24:00",
    lat:37.80302448667132, 
    lon:-122.41982918651992, 
    name:'Sit Back, Relax. Your New View Awaits. 1x1 ELECTRICITY INCLUDED!!!', 
    price: 4199, 
    location: 'russian hill', 
    cl_id: 7485315392, 
    area: 'sfc',}),

    Listing.create({ 
    link: 'https://sfbay.craigslist.org/sfc/apa/d/san-francisco-studio-near-everything/7485313841.html',
    created: "2022-05-18 11:21:00",
    lat:37.78844177256626, 
    lon:-122.41626772883498, 
    name:'Studio Near Everything @AVA Nob Hill', 
    price: 2159, 
    location: 'nob hill', 
    cl_id: 7485313841, 
    area: 'sfc',}),
    
    Listing.create({ 
    link: 'https://sfbay.craigslist.org/sfc/apa/d/san-francisco-dolores-park-studio-with/7483342780.html',
    created: "2022-05-13 14:32:00",
    lat:37.75823743924777, 
    lon:-122.42802854233001, 
    name:'Dolores Park Studio with a Private Patio', 
    price: 2400, 
    location: 'castro / upper market', 
    cl_id: 7483342780, 
    area: 'sfc',}),

    Listing.create({ 
    link: 'https://sfbay.craigslist.org/sfc/apa/d/san-francisco-renovated-in-unit-washer/7485313094.html',
    created: "2022-05-18 11:20:00",
    lat:37.79218124127501, 
    lon:-122.42423918650498, 
    name:'Renovated & IN-UNIT washer/dryer 1x1 in Pac Heights!', 
    price: 3499, 
    location: 'lower pac hts', 
    cl_id: 7485313094, 
    area: 'sfc',}),

    Listing.create({ 
    link: 'https://sfbay.craigslist.org/sfc/apa/d/san-francisco-studio-with-balcony-and/7485312366.html',
    created: "2022-05-18 11:18:00",
    lat:37.78383086719431, 
    lon:-122.41468391533996, 
    name:'Studio With Balcony and Lots of Natural Light', 
    price: 1995, 
    location: 'Tenderloin', 
    cl_id: 7485312366, 
    area: 'sfc',}),

    Listing.create({ 
    link: 'https://sfbay.craigslist.org/sfc/apa/d/san-francisco-remodeled-kitchens-minute/7485311981.html',
    created: "2022-05-18 11:18:00",
    lat:37.7830868687734, 
    lon: -122.41295481349502, 
    name:"Remodeled Kitchens; 5 minute walk to Charmaine's Rooftop Bar & Lounge", 
    price: 1885, 
    location: 'Tenderloin', 
    cl_id: 7485311981, 
    area: 'sfc',}),

    Listing.create({ 
    link: 'https://sfbay.craigslist.org/sfc/apa/d/san-francisco-updated-kitchen-and/7485310817.html',
    created: "2022-05-18 11:16:00",
    lat:37.77504732681273, 
    lon: -122.43877527116501, 
    name:'Updated Kitchen and Countertop and Lots of Natural Light', 
    price: 1995, 
    location: 'Hayes Valley', 
    cl_id: 7485310817, 
    area: 'sfc',}),

    Listing.create({ 
    link: 'https://sfbay.craigslist.org/sfc/apa/d/san-francisco-luxury-location/7485308472.html',
    created: "2022-05-18 11:11:00",
    lat:37.792121892866284, 
    lon: -122.42421772883498, 
    name:'Luxury, location, convenience! 2 Bed/3 Bath with Stunning Views', 
    price: 5977, 
    location: 'lower pac hts', 
    cl_id: 7485308472, 
    area: 'sfc',}),


    ])
    console.log(`seeded ${listings.length} listings`)
    console.log(`seeded listingssuccessfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}
//Creating Listings

  // Listing.create({ 
  // link: 'https://sfbay.craigslist.org/sfc/apa/d/san-francisco-living-room-co-working/7484152558.html',
  // created: 2022-05-15T16:16:000Z, 
  // lat:, 
  // lon:, 
  // name:'Living Room / Co-Working Lounge, Grill and Kitchen, Picnic Lawn', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),
  // Listing.create({ 
  // link: ,
  // created: , 
  // lat:, 
  // lon:, 
  // name:'', 
  // price, 
  // location, 
  // cl_id: , 
  // area: 'sfc',}),


/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
