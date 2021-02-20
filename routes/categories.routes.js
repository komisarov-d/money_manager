const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Category = require('../models/Category')

const router = Router()

router.get('/', auth, async (req, res) => {
   try {
      const categories = await Category.find({ owner: req.user.userId })
      res.status(200).json({ categories })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})

router.post('/create', auth, async (req, res) => {
   try {
      const { title, limit } = req.body
      const existCategory = await Category.findOne({ owner: req.user.userId && title })
      if (existCategory) {
         return res.status(400).json({ message: 'Категория с таким названием уже существует.' })
      }
      const category = new Category({
         owner: req.user.userId, title, limit
      })
      await category.save()
      res.status(201).json({ category, message: 'Категория создана.' })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})

router.update('/update/:id', auth, async (req, res) => {
   try {
      const category = await Category.findById(req.params.id)
      if (!category) {
         return res.status(400).json({ message: 'Категория не найдена.' })
      }
      const { title, limit } = req.body
      category.title = title
      category.limit = limit
      await category.save()
      res.status(200).json({ message: 'Категория успешно обновлена.' })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})

module.exports = router