const express = require('express')
const cors = require('cors')
const routes = require('./routes')
// require('dotenv')
// const config = require('dotenv-safe')

const app = express()
const port = 3300
const allowedOrigins = '*'

app.use(cors({ origin: allowedOrigins }))
app.use(express.json({limit: '64mb'}))

routes(app)

app.listen(port, () => {
  console.log('Server running on port: ', port)
})
