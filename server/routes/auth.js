const auth = require('basic-auth')
const jwt = require('jsonwebtoken')

module.exports = (app) => {
  app.post('/autenticar', (req, res) => {
    try {
      const credentials = auth(req)
      const { name, pass } = credentials
      if (name !== 'admin', pass !== '123') throw new Error('Login Invalido')
      return res.json({ token: jwt.sign({ user: {name, pass} }, 'SecretToken') })
    } catch (ex) {
      res.status(400).json({ error: typeof ex === 'string' ? ex : ex.message })
    }
  })
}
