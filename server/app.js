const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
module.exports = app

const { sendMessage } = require('./services/twilio')

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())

// auth and api routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))

/*
0. User account 
1. Get sample data in
2. Filtering
3. Saving filters
4. Sending notifications when there is new data
*/

app.post('/twilio', (req, res) => {
  console.log(req.body)
  sendMessage(req.body.phone_number, 'New Notification Alert')
  res.json({})
})

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
