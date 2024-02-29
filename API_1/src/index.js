const express = require('express')
const axios = require('axios')

const app = express()

const instanciaAxios = axios.create({
  baseURL: 'http://localhost:3001'
})

app.use(express.json())

app.get('/', async (req, res) => {
  //res.json('api1, porta 3000')
  //const resultadoAxios = await axios.get('http://localhost:3001/carros')

  const novoCarro = {
    modelo: 'Fusca',
    marca: 'VW'
  }

  const resultadoAxios = await instanciaAxios.post('/carros', novoCarro)

  res.json(resultadoAxios.data)
})

app.listen(3000)
