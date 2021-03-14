const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Record = require('../models/Record')
const router = Router()

router.get('/', auth, async (req, res) => {
   try {
      const records = await Record.find({ owner: req.user.userId })
      res.status(200).json({ records })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})

router.get('/detail/:id', auth, async (req, res) => {
   try {
      const record = await Record.findById(req.params.id)
      res.status(200).json({ record })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})
router.delete('/:id', auth, async (req, res) => {
   try {
      await Record.findOneAndDelete(req.params.id)
      res.status(200).json({ message: 'Запись успешно удалена.' })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})
router.post('/create', auth, async (req, res) => {
   try {
      const { type, amount, description } = req.body.record
      const record = new Record({
         description, amount, type, owner: req.user.userId, category: req.body.categoryId
      })
      await record.save()
      res.status(201).json({ message: 'Запись создана.' })
      // res.redirect('/history')
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})

module.exports = router