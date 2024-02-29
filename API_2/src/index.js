const express = require('express')

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  res.json('api2, porta 3001')
})

app.listen(3001)
