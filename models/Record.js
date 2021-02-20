const { model, Schema, Types } = require('mongoose')

const schema = new Schema({
   category: { type: Types.ObjectId, ref: 'Category' },
   owner: { type: Types.ObjectId, ref: 'User' },
   description: { type: String, required: true },
   amount: { type: Number, required: true },
   date: { type: Date, default: Date.now },
   type: { type: String, required: true },

})

module.exports = model('Record', schema)