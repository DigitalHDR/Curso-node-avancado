const express = require('express')
const app = express()
const port = 3000

const path = require('path')

// ler o body
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req,res) => {
  res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req,res) => {
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`o nome de usuario é: ${name} e sua idade é ${age}`)

  res.sendFile(`${basePath}/userform.html`)
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  // leitura da tabela users, resgatar um usuario do banco
  console.log(`estamos buscando pelo usuario: ${id}`)
  res.sendFile(`${basePath}/users.html`)
})


app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
