const express = require('express')

const app = express()
// process.env.NODE_ENV=

app.set('secret', 'fdsffsfs')

app.use(require('cors')())
app.use(express.json())

app.use('/', express.static(__dirname + '/web'))

app.use('/admin', express.static(__dirname + '/admin'))

app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/uploadVideos', express.static(__dirname + '/uploadVideos'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})