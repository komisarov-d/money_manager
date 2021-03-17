const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Record = require('../models/Record')
const User = require('../models/User')
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
      const records = await Record.find({ owner: req.user.userId })
      if (records.length > 60) { return res.status(400).json({ message: 'Максимальное количество записей 60.' }) }
      const { type, amount, description } = req.body.record
      const record = new Record({ description, amount, type, owner: req.user.userId, category: req.body.categoryId })
      const user = await User.findOne({ _id: req.user.userId })
      if (type === 'outcome') { user.bill = user.bill - amount } else if (type === 'income') { user.bill = user.bill + +amount }
      await record.save()
      await user.save()
      res.status(201).json({ message: 'Запись создана.', bill: user.bill, record })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})

module.exports = router