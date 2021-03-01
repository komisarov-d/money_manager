const jwt = require('jsonwebtoken')
const config = require('config')
module.exports = (req, res, next) => {
   if (req.method === 'OPTION') {
      next()
   }
   try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
         res.status(401).json({ message: 'Вы не авторизованы.' })
      }
      const verifUser = jwt.verify(token, config.get('jwtSecret'))
      req.user = verifUser
      next()
   } catch (e) {
      res.status(401).json({ message: 'Вы не авторизованы.' })
   }
}