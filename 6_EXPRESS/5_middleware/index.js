const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req,res,next) {
  req.authStatus = false

  if(req.authStatus) {
    console.log('esta logando, pode continuar')
    next()
  } else {
    console.log('não está logando faça o login pra continuar')
    next()
  }
}

app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
