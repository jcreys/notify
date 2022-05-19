const Sequelize = require("sequelize");
const { STRING, ENUM, DECIMAL, BIGINT, TEXT, DATE, FLOAT } = Sequelize;
const db = require("../db");

const Listing = db.define("listing", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  created: {
    type: DATE,
  },
  geotag: {
    type: STRING,
  },
  lat: {
    type: FLOAT,
    allowNull: true
  },
  lon: {
    type: FLOAT,
    allowNull: true
  },
  link: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  location: {
    type: STRING,
    allowNull: true,
  },
  price: {
    type: DECIMAL(10, 2),
  },
  cl_id: {
    type: BIGINT,
    unique: true,
  },
  area: {
    type: STRING,
  },
  subStop: {
      type: STRING
  }
});

module.exports = Listing;
