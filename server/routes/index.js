const auth = require('./auth')

module.exports = (app) => {
  auth(app)

  app.get('/', (req, res) => {
    res.send('Hello, world!')
  })
}