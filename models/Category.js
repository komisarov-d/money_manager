const { model, Schema, Types } = require('mongoose')

const schema = new Schema({
   owner: { type: Types.ObjectId, ref: 'User' },
   title: { type: String, required: true },
   limit: { type: Number, required: true },
   records: [{ type: Types.ObjectId, ref: 'Record' }]
})

module.exports = model('Category', schema)