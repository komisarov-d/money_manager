const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
//dev
const PORT = config.get('port') ?? 5000
//prod
// const PORT = process.env.PORT ?? config.get('port')

app.use(express.json({ extended: true }))

const initialize = async () => {
   try {
      await mongoose.connect(config.get('mongo', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true
      }))
      app.listen(PORT, () => {
         console.log(`Server has been started on port ${PORT}`)
      })
   } catch (e) {
      console.log(`Error: ${e.message}`)
      process.exit(1)
   }
}

initialize()