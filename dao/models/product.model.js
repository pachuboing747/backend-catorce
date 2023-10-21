const { Schema, model } = require('mongoose')
const paginate = require('mongoose-paginate-v2')


const schema = new Schema({
  title: String,
  description: String,
  price: Number,
  stock: { type: Number, default: 0 },
  thumbnail: String,
  owner: { type: String, ref: 'users' }
})

schema.plugin(paginate)

const productModel = model('products', schema)

module.exports = productModel