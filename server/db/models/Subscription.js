const Sequelize = require("sequelize");
const { FLOAT } = Sequelize;
const db = require("../db");

const Subscription = db.define("subscription", {
  maxPrice: {
    type: FLOAT
  },
  minPrice: {
    type: FLOAT,
  },
});

module.exports = Subscription;
