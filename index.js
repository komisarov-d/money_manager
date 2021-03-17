const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
//dev
// const PORT = config.get('port') ?? 5000
//prod
const PORT = process.env.PORT || config.get('port')

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/category', require('./routes/categories.routes'))
app.use('/api/record', require('./routes/records.routes'))


if (process.env.NODE_ENV === 'production') {
   app.use('/', express.static(path.join(__dirname, 'client', 'build')))
   app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) })
}


const initialize = async () => {
   try {
      await mongoose.connect(config.get('mongo', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndexes: true
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