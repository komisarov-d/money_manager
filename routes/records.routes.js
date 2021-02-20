const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Record = require('../models/Record')
const router = Router()

router.get('/', auth, async (req, res) => {
   try {
      const records = Record.find({ owner: req.user.userId })
      res.status(200).json({ records })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})

router.get('/:id', auth, async (req, res) => {
   try {
      const record = Record.findById(req.params.id)
      res.status(200).json({ record })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})
router.post('/record', auth, async (req, res) => {
   try {
      const { description, amount, date, type, categoryId } = req.body
      const record = new Record({
         description, amount, type, owner: req.user.userId, category: categoryId
      })
      await record.save()
      res.status(201).json({ message: 'Запись создана.', record })
   } catch (e) {
      return res.status(500).json({ message: ' Что-то пошло не так попробуйте снова.' })
   }
})

module.exports = router