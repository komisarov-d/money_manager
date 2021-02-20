const { model, Schema, Types } = require('mongoose')

const schema = new Schema({
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   name: { type: String, required: true },
   bill: { type: Number,  default: 0 },
   categories: [{ type: Types.ObjectId, ref: 'Category' }]
})

module.exports = model('User', schema)