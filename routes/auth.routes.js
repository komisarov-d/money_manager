const { Router } = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const config = require('config')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/singup',
   [
      check('email', 'Введите корректный имейл').isEmail(),
      check('password', 'Минимальная длинна пароля 8 символов.').isLength({ min: 8 }),
      check('name', 'Введите имя.').exists()
   ]
   , async (req, res) => {
      try {
         const errors = validationResult(req.body)
         if (!errors.isEmpty) {
            return res.status(400).json({ errors: errors.array(), message: 'Некоректные данные при регистрации' })
         }
         const { email, password, name } = req.body
         const alreadyExists = await User.findOne({ email })
         if (alreadyExists) {
            return res.status(400).json({ message: 'Пользователь с таким имейлом уже существует.' })
         }
         const hashedPassword = await bcrypt.hash(password, 12)
         const user = new User({ email, password: hashedPassword, name })
         await user.save()
         const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '10h' }
         )
         res.status(201).json({ token, userId: user.id, user })
      } catch (e) {
         return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
      }
   })

router.post('/login',
   [
      check('email', 'Введите корректный имейл').normalizeEmail().isEmail(),
      check('password', 'Введите корректный пароль.').exists()
   ]
   , async (req, res) => {
      try {
         const errors = validationResult(req.body)
         if (!errors.isEmpty) {
            return res.status(400).json({ errors: errors.array(), message: 'Некоректные данные при входе в систему.' })
         }
         const { email, password } = req.body
         const user = await User.findOne({ email })
         if (!user) {
            return res.status(400).send({ message: 'Пользователь с таким имейлом не найден.' })
         }
         const passwordMatch = await bcrypt.compare(password, user.password)
         if (!passwordMatch) {
            res.status(400).json({ message: 'Некоректные данные при входе в систему.' })
         }
         const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '10h' }
         )
         res.json({ token, userId: user.id })
      } catch (e) {
         return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
      }
   })

router.get('/info', auth, async (req, res) => {
   try {
      const user = await User.findOne({ _id: req.user.userId })
      res.json({ user })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})

module.exports = router